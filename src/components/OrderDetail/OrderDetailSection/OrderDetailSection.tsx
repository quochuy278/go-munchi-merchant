import { Box } from "@mui/material";
import React from "react";
import styles from "./OrderDetailSection.module.css";
const OrderDetailSection = ({ children }: any) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      className={styles.detail__container}
    >
      {children}
    </Box>
  );
};

export default OrderDetailSection;
