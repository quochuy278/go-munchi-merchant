import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderByPublicIdQuery } from "../../store/slices/api";
import CenterContainer from "../Container/CenterContainer";
import DetailContainer from "../Container/DetailContainer";
import FullscreenLoading from "../Loading/FullscreenLoading";
import { OrderDetailBoard } from "./OrderDetailBoard/OrderDetailBoard";
import OrderDetailBoardLeft from "./OrderDetailBoard/OrderDetailBoardLeft/OrderDetailBoardLeft";
import { OrderDetailBoardRight } from "./OrderDetailBoard/OrderDetailBoardRight/OrderDetailBoardRight";

import { OrderDetailTitle } from "./OrderDetailTitle/OrderDetailTitle";

export const OrderDetail = () => {
  const param = useParams();
  const orderId = param.orderId as string;
  const { data, isFetching, isLoading, isError, error } =
    useGetOrderByPublicIdQuery(orderId);
  if (isLoading || isFetching) {
    return <FullscreenLoading />;
  }
  return (
    <DetailContainer>
      <OrderDetailTitle orderId={data.id} />
      <OrderDetailBoard>
        <OrderDetailBoardLeft data={data} />
        <OrderDetailBoardRight data={data} />
      </OrderDetailBoard>
    </DetailContainer>
  );
};
