import React from "react";
import styles from "./OrderDetailBoardRightFooter.module.css";

export interface OrderDetailBoardRightFooterProps {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
}

const OrderDetailBoardRightFooter = ({
  timeStamp,
  orderStatus,
  deliveryType,
  orderId,
}: OrderDetailBoardRightFooterProps) => {
  return <div>OrderDetailBoardRightFooter</div>;
};

export default OrderDetailBoardRightFooter;
