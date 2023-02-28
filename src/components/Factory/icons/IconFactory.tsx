import { Box, Typography } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import { DeliveryEnum } from "../../../types/enum/enum";

export const IconFactory = ({ orderType }: any) => {
  switch (orderType) {
    case DeliveryEnum.PICK_UP:
      return (
        <Box display="flex">
          <DiningIcon sx={{ width: "16px", height: "14px", marginX: 1 }} />
          <Typography fontSize="10px" lineHeight="13px">
            delivery_type 2
          </Typography>
        </Box>
      );
    case DeliveryEnum.DELIVERY:
      return (
        <Box display="flex">
          <DeliveryDiningIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            delivery_type 1
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
            delivery_type 3
          </Typography>
        </Box>
      );
    case null:
      return null;
    default:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            delivery_type 0
          </Typography>
        </Box>
      );
  }
};
