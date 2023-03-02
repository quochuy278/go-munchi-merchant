import React from "react";

export interface DetailFooterProps {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
}

const DetailAcceptedFooter = ({
  orderStatus,
  timeStamp,
  orderId,
  deliveryType,
}: DetailFooterProps) => {
  return <div>DetailAcceptedFooter</div>;
};

export default DetailAcceptedFooter;
