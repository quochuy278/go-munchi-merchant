import { Box, Typography } from "@mui/material";
import { Summary } from "../../../../../types";
import { IconFactory } from "../../../../Factory/icons/IconFactory";
import styles from "./OrderDetailBoardRightList.module.css";

interface OrderDetailRightListProps {
  name: string;
  deliveryType: number;
}
const OrderDetailBoardRightList = ({
  name,
  deliveryType,
}: OrderDetailRightListProps) => {
  return (
    <Box className={styles.detail__info}>
      <Box className={styles.detail__info__bar}>
        <Box sx={{ marginX: "10px" }}>
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

      <Box sx={{ padding: "20px" }}>
        <IconFactory deliveryType={deliveryType} />
      </Box>
    </Box>
  );
};

export default OrderDetailBoardRightList;
