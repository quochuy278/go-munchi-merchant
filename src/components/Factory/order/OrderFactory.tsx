import React from "react";
import { OrderFooterProps } from "../../../types";
import { OrderEnum } from "../../../types/enum/enum";
import OrderAcceptedFooter from "../../Order/OrderFooter/OrderAcceptedFooter";
import OrderCompletedFooter from "../../Order/OrderFooter/OrderCompletedFooter";
import OrderPendingFooter from "../../Order/OrderFooter/OrderPendingFooter";

const pendingStatus: number[] = [0];
const acceptedStatus: number[] = [1, 3, 6, 7];
const completedStatus: number[] = [10, 11, 12, 13];

const OrderFactory = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
  status,
}: OrderFooterProps) => {
  switch (true) {
    case pendingStatus.includes(orderStatus):
      return (
        <OrderPendingFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
          status={status}
        />
      );
    case acceptedStatus.includes(orderStatus):
      return (
        <OrderAcceptedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
          status={status}
        />
      );
    case completedStatus.includes(orderStatus):
      return (
        <OrderCompletedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          deliveryType={deliveryType}
          prepTime={prepTime}
          status={status}
        />
      );

    default:
      return <>Something wrong happend, please contact your business</>;
  }
};

export default OrderFactory;
