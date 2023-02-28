import React from "react";
import { Box, Typography } from "@mui/material";
import { Order } from "../../../types";
import OrderItem from "../OrderItem/OrderItem";
import { useAppSelector } from "../../../store/hooks";
import { selectSession } from "../../../store/slices/session";
import { getUrl } from "../../../utils/getEnvUrl";
import { useGetFilteredOrderQuery } from "../../../store/slices/api";
import FullscreenLoading from "../../Loading/FullscreenLoading";

export interface FilterQuery {
  publicBusinessId: string;
  query?: string | null;
  paramsQuery: string[] | string;
}

const OrderList = () => {
  const { businessId, publicUserId } = useAppSelector(selectSession);
  const filterData: FilterQuery = {
    publicBusinessId: businessId! as string,
    query: '{"status":[0,2,5,7]}',
    paramsQuery: [
      "id",
      "business_id",
      "prepared_in",
      "customer_id",
      "status",
      "delivery_type",
      "delivery_datetime",
      "products",
      "summary",
      "customer",
      "created_at",
    ].join(","),
  };
  const { data, isFetching, isLoading, isError, error } =
    useGetFilteredOrderQuery(filterData);
  console.log(data);
  if (isFetching || isLoading) {
    return <FullscreenLoading />;
  }
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(1, 1fr)"
      gap={2}
      paddingX={2}
    >
      <>
        {data.map((order: Order) => {
          return <OrderItem order={order} key={order.id} />;
        })}
      </>
    </Box>
  );
};

export default OrderList;
