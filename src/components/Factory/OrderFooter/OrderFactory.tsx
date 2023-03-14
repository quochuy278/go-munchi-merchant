import React, { useState } from "react";
import { OrderFooterProps } from "../../../types";
import { OrderEnum } from "../../../types/enum/enum";
import FactoryDialog from "../../Dialog/Dialog";
import {
  acceptedStatus,
  completedStatus,
  pendingStatus,
} from "../../Order/Order";
import OrderAcceptedFooter from "../../Order/OrderFooter/OrderAcceptedFooter";
import OrderCompletedFooter from "../../Order/OrderFooter/OrderCompletedFooter";
import OrderPendingFooter from "../../Order/OrderFooter/OrderPendingFooter";

export const OrderFooterFactory = ({
  orderStatus,
  orderId,
  preparedIn,
  deliveryType,
  status,
  createdAt,
}: OrderFooterProps) => {
  console.log(preparedIn);
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  let orderFooter: JSX.Element = <></>;
  switch (true) {
    case pendingStatus.includes(orderStatus):
      orderFooter = (
        <OrderPendingFooter
          orderStatus={orderStatus}
          orderId={orderId}
          preparedIn={preparedIn}
          deliveryType={deliveryType}
          status={status}
          createdAt={createdAt}
          onOpen={onOpen}
        />
      );
      break;
    case acceptedStatus.includes(orderStatus):
      orderFooter = (
        <OrderAcceptedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          preparedIn={preparedIn}
          deliveryType={deliveryType}
          status={status}
          createdAt={createdAt}
          onOpen={onOpen}
        />
      );
      break;
    case completedStatus.includes(orderStatus):
      orderFooter = (
        <OrderCompletedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          deliveryType={deliveryType}
          preparedIn={preparedIn}
          status={status}
          createdAt={createdAt}
          onOpen={onOpen}
        />
      );
      break;
  }
  return (
    <>
      {orderFooter}
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
