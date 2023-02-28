import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./OrderDetailTitle.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface OrderDetailProps {
  orderId: number;
}

export const OrderDetailTitle = ({ orderId }: OrderDetailProps) => {
  return (
    <Box className={styles.title__container}>
      <Box>
        {" "}
        <Typography fontSize="30px" lineHeight="39px" textAlign="left">
          Order # {orderId}
        </Typography>
      </Box>
      <Box>
        <Link to="/">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};
