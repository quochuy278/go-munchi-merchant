import styles from "./OrderDetailCustomerInfo.module.css";
import { Box, Typography } from "@mui/material";
import { IconFactory } from "../../Factory/icons/IconFactory";

interface OrderDetailCustomerInfoProps {
  name: string;
  deliveryType: number;
}
const OrderDetailCustomerInfo = ({
  name,
  deliveryType,
}: OrderDetailCustomerInfoProps) => {
  console.log("Order detail customer info", deliveryType);
  return (
    <Box className={styles.detail__info}>
      <Box className={styles.detail__info__bar}>
        <Box sx={{}}>
          <Typography fontSize="10px" lineHeight="13px">
            Customer
          </Typography>
          <Typography fontSize="18px" lineHeight="24px">
            {name}
          </Typography>
        </Box>
        {/* <IconButton
          sx={{
            marginX: "10px",
            backgroundColor: "#F2F9FE",
            borderRadius: "8px",
            width: "40px",
          }}
        >
          <PhoneOutlinedIcon
            sx={{ width: "14px", height: "14px" }}
            color="primary"
          />
        </IconButton>
        <IconButton
          sx={{
            marginX: "10px",
            backgroundColor: "#F2F9FE",
            borderRadius: "8px",
            width: "40px",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon
            sx={{ width: "14px", height: "14px" }}
            color="primary"
          />
        </IconButton> */}
      </Box>

      <Box sx={{ paddingBottom: "15px" }}>
        <IconFactory deliveryType={deliveryType} />
      </Box>
    </Box>
  );
};

export default OrderDetailCustomerInfo;
