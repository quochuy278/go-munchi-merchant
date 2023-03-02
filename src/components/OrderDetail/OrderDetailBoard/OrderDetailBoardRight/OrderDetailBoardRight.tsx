import Box from "@mui/material/Box/Box";
import React from "react";
import OrderDetailBoardRightList from "./OrderDetailBoardRightList/OrderDetailBoardRightList";
import styles from "./OrderDetailBoardRight.module.css";
import DetailOrderFactory from "../../../Factory/DetailOrderFooter/DetailOrderFactory";

export const OrderDetailBoardRight = ({ data }: any) => {
  const { customer, createdAt, status, deliveryType, id } = data;
  console.log(data)
  return (
    <Box gridColumn="span 6" className={styles.detail__info__container}>
      <OrderDetailBoardRightList
        name={customer.name}
        deliveryType={deliveryType}
      />
      <Box className={styles.detail__time__section}>
        <DetailOrderFactory
          timeStamp={createdAt}
          orderStatus={status}
          deliveryType={deliveryType}
          orderId={id}
        />
      </Box>
    </Box>
  );
};
