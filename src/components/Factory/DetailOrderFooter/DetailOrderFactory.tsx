import { Box } from "@mui/material";
import React from "react";
import { OrderEnum } from "../../../types/enum/enum";
import DetailCompletedFooter from "../../OrderDetail/OrderDetailBoard/OrderDetailBoardRight/OrderDetailBoardRightFooter/OrderDetailFooter/DetailCompletedFooter";
import DetailPendingFooter from "../../OrderDetail/OrderDetailBoard/OrderDetailBoardRight/OrderDetailBoardRightFooter/OrderDetailFooter/DetailPendingFooter";
import styles from "./DetailOrderFactory.module.css";

interface OrderDetailBoardRightFooterProps {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
}

const DetailOrderFactory = ({
  timeStamp,
  orderStatus,
  deliveryType,
  orderId,
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