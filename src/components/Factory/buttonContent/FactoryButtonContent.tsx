import { DeliveryEnum } from "../../../types/enum/enum";
import { Typography } from "@mui/material";
interface FactoryProps {
  orderStatus: number;
}
export const FactoryButtonContent = ({ orderStatus }: FactoryProps) => {
  // const deliveryReadyHandler = () => {}
  // const pickupReadyHandler = () => {}
  // const readyReadyHandler = () => {}
  switch (orderStatus) {
    case DeliveryEnum.DELIVERY:
      return (
        // delivery
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            Ready to delivery
          </Typography>
        </>
      );
    case DeliveryEnum.PICK_UP:
      return (
        // pickup
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            Ready to pick up
          </Typography>
        </>
      );
    case DeliveryEnum.EATIN:
      return (
        // eatin
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            Ready to serve
          </Typography>
        </>
      );
    default:
      return (
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            Ready to serve
          </Typography>
        </>
      );
  }
};
