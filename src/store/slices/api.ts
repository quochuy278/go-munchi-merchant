import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { FilterQuery } from "../../components/Order/OrderList/OrderList";
import { UpdateOrderData } from "../../types";
import axios from "axios";
import { clearSessionState, setSessionState } from "./session";
import { Mutex } from "async-mutex";
import {
  addSessionState,
  clearSessionState as clearSession,
} from "../../utils/preference";

export interface SignInData {
  email: string;
  password: string;
}
const mutex = new Mutex();
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  //
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const refreshToken = (api.getState() as RootState).session.refreshToken;
      try {
        const refreshResult = await axios({
          url: `${process.env.REACT_APP_API__URL_DEV}auth/refreshToken`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        if (refreshResult.data) {
          api.dispatch(
            setSessionState({
              refreshToken: refreshResult.data.refreshToken,
              verifyToken: refreshResult.data.verifyToken,
            })
          );
          await addSessionState({
            refreshToken: refreshResult.data.refreshToken,
            verifyToken: refreshResult.data.verifyToken,
          });
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(clearSessionState()); //logout and clear all data
          await clearSession();
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
  // Define a service using a base URL and expected endpoints
};
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API__URL_DEV}`,
  async prepareHeaders(headers, { getState }) {
    const verifyToken = (getState() as RootState).session.verifyToken;

    headers.set("authorization", `Bearer ${verifyToken}`);
  },
});

export const munchiApi = createApi({
  reducerPath: "munchiApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Business", "User", "Order"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (signInData: SignInData) => ({
        url: `auth/signin`,
        method: "POST",
        body: {
          email: signInData.email,
          password: signInData.password,
        },
      }),
    }),
    getBusiness: builder.query({
      query: (publicUserId) => ({
        url: `business/allbusiness`,
        method: "POST",
        body: {
          publicUserId: publicUserId,
        },
      }),
    }),
    getFilteredOrder: builder.query({
      query: (filterQuery: FilterQuery) => ({
        url: `orders/filteredOrders?query=${filterQuery.query}&paramsQuery=${filterQuery.paramsQuery}&publicBusinessId=${filterQuery.publicBusinessId}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
    getOrderByPublicId: builder.query({
      query: (id) => ({
        url: `orders/${id}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
    updateOrder: builder.mutation({
      query: (data: UpdateOrderData) => ({
        url: `orders/${data.orderId}`,
        method: "PUT",
        body: {
          preparedIn: data.newPrepTime,
          orderStatus: data.orderStatus,
        },
      }),
      invalidatesTags: ["Order"],
    }),
    getRefreshToken: builder.query({
      query: () => ({
        url: `auth/refreshToken`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
  }),
});

export const {
  useSignInMutation,
  useGetBusinessQuery,
  useGetFilteredOrderQuery,
  useGetOrderByPublicIdQuery,
  useUpdateOrderMutation,
  useGetRefreshTokenQuery,
} = munchiApi;
