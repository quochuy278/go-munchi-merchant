import styles from "./OrderCompleteItem.module.css";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DiningIcon from "@mui/icons-material/Dining";
import React from "react";

const OrderCompleteItem = ({ order }: any) => {
  return (
    <Box className={styles.order__complete__card__container}>
      <Typography
        lineHeight="29px"
        fontSize="22px"
        fontWeight={1000}
        textAlign="left"
        fontFamily="DM-Sans-bold"
      >
        # 4215
      </Typography>
      <Typography lineHeight="18px" fontSize="14px" fontWeight={600}>
        {" "}
        {order.customer.name} {order.customer.lastName["0"]}
      </Typography>
      <Box
        display="flex"
        padding="3px"
        justifyContent="center"
        alignItems="center"
        border="0.5px solid #d7d7d7"
        borderRadius="5px"
      >
        <DiningIcon sx={{ width: "16px", height: "14px", marginX: 0.2 }} />
        <Typography fontSize="10px" lineHeight="13px">
          Takeaway
        </Typography>
      </Box>
      <Box>
        <Box component="span">
          <CheckCircleIcon
            sx={{ width: "50px", height: "50px", color: "#543cef" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCompleteItem;
