import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./OrderDetailProductItem.module.css";
const OrderDetailProductItem = ({ product }: any) => {
  return (
    <Box className={styles.product__detail}>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box display="flex" alignItems="center">
          <Typography>{product.quantity}</Typography>
          <CloseIcon
            sx={{
              color: "#000000",
              width: "10px",
              height: "10px",
              marginX: "20px",
            }}
          />
          <Box>
            <Typography fontSize="12px" lineHeight="16px">
              {product.name}
            </Typography>
          </Box>
        </Box>
        <Box textAlign="right">
          <Typography fontSize="12px" lineHeight="16px">
            {product.price} €
          </Typography>
        </Box>
      </Box>
      <Box width="120%">
        <Divider sx={{ width: "100%", marginTop: "10px" }} />
      </Box>
      <Box sx={{ width: "90%" }}>
        {product.comment ? (
          <Box
            sx={{
              backgroundColor: "#F3F5F7",
              width: "fit-content",
              height: "fit-content",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <Typography
              fontSize="12px"
              lineHeight="16px"
              fontFamily="DM-sans"
              fontWeight={600}
            >
              {product.comment}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default OrderDetailProductItem;
