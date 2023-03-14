import { Box } from "@mui/material";
import React, { useState } from "react";
import { OrderEnum } from "../../../types/enum/enum";
import {
  acceptedStatus,
  completedStatus,
  pendingStatus,
} from "../../Order/Order";
import { PendingFooter as DetailPendingFooter } from "../../OrderDetail/OrderDetailFooter/PendingFooter";
import { AcceptedFooter as DetailAcceptedFooter } from "../../OrderDetail/OrderDetailFooter/AcceptedFooter";
import { CompletedFooter as DetailCompletedFooter } from "../../OrderDetail/OrderDetailFooter/CompletedFooter";
import styles from "./OrderDetailFooterFactory.module.css";
import FactoryDialog from "../../Dialog/Dialog";
import CenterContainer from "../../Container/CenterContainer";

interface OrderDetailFooterFactoryProps {
  createdAt: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
  preparedIn: number;
}

const OrderDetailFooterFactory = ({
  createdAt,
  orderStatus,
  deliveryType,
  orderId,
  preparedIn,
}: OrderDetailFooterFactoryProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  let OrderDetailFooter = <></>;
  switch (true) {
    case pendingStatus.includes(orderStatus):
      OrderDetailFooter = (
        <Box className={styles.detail_footer_container}>
          <DetailPendingFooter
            preparedIn={preparedIn}
            createdAt={createdAt}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
          />
        </Box>
      );
      break;
    case acceptedStatus.includes(orderStatus):
      OrderDetailFooter = (
        <Box className={styles.detail_footer_container}>
          <DetailAcceptedFooter
            createdAt={createdAt}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
            preparedIn={preparedIn}
            onOpen={onOpen}
          />
        </Box>
      );
      break;
    case completedStatus.includes(orderStatus):
      OrderDetailFooter = (
        <Box className={styles.detail_footer_container}>
          <DetailCompletedFooter
            createdAt={createdAt}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            orderId={orderId}
            preparedIn={preparedIn}
            onOpen={onOpen}
          />
        </Box>
      );
      break;
    default:
      OrderDetailFooter = (
        <CenterContainer>Something wrong happened</CenterContainer>
      );
      break;
  }
  return (
    <>
      {OrderDetailFooter}
      <FactoryDialog
        isOrder={true}
        open={open}
        onClose={onClose}
        modalData={{
          deliveryType: deliveryType,
          orderId: orderId,
          status: orderStatus,
        }}
      />
    </>
  );
};

export default OrderDetailFooterFactory;
