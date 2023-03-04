import { Box } from "@mui/material";
import React from "react";
import { OrderEnum } from "../../../types/enum/enum";
import DetailCompletedFooter from "../../OrderDetail/OrderDetailBoard/OrderDetailBoardRight/OrderDetailFooter/DetailCompletedFooter";
import DetailPendingFooter from "../../OrderDetail/OrderDetailBoard/OrderDetailBoardRight/OrderDetailFooter/DetailPendingFooter";
import styles from "./DetailOrderFactory.module.css";

interface OrderDetailBoardRightFooterProps {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
  preparedIn: number;
}

const DetailOrderFactory = ({
  timeStamp,
  orderStatus,
  deliveryType,
  orderId,
  preparedIn,
}: OrderDetailBoardRightFooterProps) => {
  switch (orderStatus) {
    case OrderEnum.ACCEPTED_BY_DRIVER:
      return (
        <Box className={styles.detail_footer_container}>
          <DetailCompletedFooter
            timeStamp={timeStamp}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
            preparedIn={preparedIn}
          />
        </Box>
      );

    case OrderEnum.PENDING:
      return (
        <Box className={styles.detail_footer_container}>
          <DetailPendingFooter
            timeStamp={timeStamp}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
          />
        </Box>
      );
    case OrderEnum.COMPLETED:
      return (
        <Box className={styles.detail_footer_container}>
          <DetailCompletedFooter
            timeStamp={timeStamp}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
            preparedIn={preparedIn}
          />
        </Box>
      );
    default:
      return (
        <Box className={styles.detail_footer_container}>
          <DetailPendingFooter
            timeStamp={timeStamp}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
          />
        </Box>
      );
  }
};

export default DetailOrderFactory;
