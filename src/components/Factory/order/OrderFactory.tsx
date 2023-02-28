import React from "react";
import { OrderEnum } from "../../../types/enum/enum";
import OrderAcceptedFooter from "../../Order/OrderFooter/OrderAcceptedFooter";
import OrderCompletedFooter from "../../Order/OrderFooter/OrderCompletedFooter";
import OrderPendingFooter from "../../Order/OrderFooter/OrderPendingFooter";


interface FooterProps {
  prepTime: number;
  orderId: number;
  orderStatus: number;
  deliveryType: number;
}

const OrderFactory = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
}: FooterProps) => {
  switch (true) {
    case orderStatus === OrderEnum.PENDING:
      return (
        <OrderPendingFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
        />
      );
    case orderStatus === OrderEnum.ACCEPTED_BY_BUSINESS:
      return (
        <OrderAcceptedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
        />
      );
      break;
    default:
      return (
        <OrderCompletedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          deliveryType={deliveryType}
          prepTime={prepTime}
        />
      );
  }
};

export default OrderFactory;
