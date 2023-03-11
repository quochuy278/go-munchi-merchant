import { Box, Typography } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import { DeliveryEnum } from "../../../types/enum/enum";

export const IconFactory = ({ deliveryType }: any) => {
  console.log('Icon factory', deliveryType)
  switch (deliveryType) {
    case DeliveryEnum.DELIVERY:
      return (
        <Box display="flex">
          <DeliveryDiningIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Delivery
          </Typography>
        </Box>
      );
    case DeliveryEnum.PICK_UP:
      return (
        <Box display="flex">
          <DiningIcon sx={{ width: "16px", height: "14px", marginX: 1 }} />
          <Typography fontSize="10px" lineHeight="13px">
            Pick up
          </Typography>
        </Box>
      );

    case DeliveryEnum.EATIN:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Eat in
          </Typography>
        </Box>
      );
    case DeliveryEnum.CURBSIDE:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Curbside
          </Typography>
        </Box>
      );
    case DeliveryEnum.DRIVER_THRU:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Drive
          </Typography>
        </Box>
      );
    default:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Some thing wrong happend
          </Typography>
        </Box>
      );
  }
};
