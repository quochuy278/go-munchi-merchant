import { useParams } from "react-router-dom";
import { useGetOrderByPublicIdQuery } from "../../store/slices/api";
import DetailContainer from "../Container/DetailContainer";
import FullscreenLoading from "../Loading/FullscreenLoading";
import { OrderDetailAction } from "./OrderDetailAction/OrderDetailAction";
import { OrderDetailBoard } from "./OrderDetailBoard/OrderDetailBoard";
import OrderDetailSection from "./OrderDetailSection/OrderDetailSection";

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
      <OrderDetailSection>
        <OrderDetailBoard data={data}/>
        <OrderDetailAction data={data}/>
      </OrderDetailSection>
    
    </DetailContainer>
  );
};
