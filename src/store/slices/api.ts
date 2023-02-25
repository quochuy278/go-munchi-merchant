import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";

export interface SignInData {
  email: string;
  password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API__URL_DEV}`,
  async prepareHeaders(headers, { getState }) {
    // If we have a token set in state, let's assume that we should be passing it.
    // const authenticateData: GetResult = await Preferences.get({ key: 'loginState' })
    // const data: LoginState = JSON.parse(authenticateData.value!)
    // var verifyToken: string
    const verifyToken = (getState() as RootState).session.verifyToken;
    // if (!data)
    //     verifyToken = loginState.verifyToken as string
    headers.set("authorization", `Bearer ${verifyToken}`);
    // } else {
    //     verifyToken = data.verifyToken as string
    //     headers.set('authorization', `Bearer ${verifyToken}`)
    // }
    // return headers
  },
});

export const munchiApi = createApi({
  reducerPath: "munchiApi",
  baseQuery: baseQuery,
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
  }),
});

export const { useSignInMutation, useGetBusinessQuery } = munchiApi;
