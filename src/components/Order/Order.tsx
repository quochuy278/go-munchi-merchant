import { Box } from "@mui/material";
import React from "react";
import OrderContainer from "../Container/OrderContainer";
import styles from "./Order.module.css";
import OrderList from "./OrderList/OrderList";
import OrderTitle from "./OrderTitle/OrderTitle";
const Order = () => {
  return (
    <OrderContainer>
      <Box
        display="grid"
        gridTemplateColumns="repeat(14, 1fr)"
        gap={2}
        sx={{ width: "100%", padding: "10px" }}
      >
        <Box gridColumn="span 6" className={styles.section__container}>
          <OrderTitle title={"Pending"} quantity={8} />
          <OrderList />
          {/* <OrderTitle
            orderTitle={t("section.sectiontitle.0")}
            orderQuantity={pendingOrders.length}
          />
          <OrderCardList ordersData={pendingOrders} /> */}
        </Box>

        {/* Accepted */}
        {/* 
        <Box gridColumn="span 6" className={styles.section__container}>
          <OrderTitle
            orderTitle={t("section.sectiontitle.1")}
            orderQuantity={acceptedOrders.length}
          />
          <OrderCardList ordersData={acceptedOrders} />
        </Box> */}
        {/* Ready */}

        {/* <Box gridColumn="span 2" className={styles.section__container}>
          <OrderTitle
            orderTitle={t("section.sectiontitle.2")}
            orderQuantity={readyOrders.length}
          />
          <OrderCompleteList ordersData={readyOrders} />
        </Box> */}
      </Box>
    </OrderContainer>
  );
};

export default Order;
