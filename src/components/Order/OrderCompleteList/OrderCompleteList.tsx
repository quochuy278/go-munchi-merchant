import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "/OrderCompleteList.module.css";
import { Order } from "../../../types";
import OrderCompleteItem from "../OrderCompleteItem/OrderCompleteItem";

interface OrderCompleteListProp {
  order: Order[];
}

const OrderCompleteList = ({ order }: OrderCompleteListProp) => {
  return (
    <Box
      display="grid"
      className={styles.card__container}
      gridTemplateColumns="repeat(1, 1fr)"
      gap={2}
      paddingX={2}
    >
      {order.length === 0 ? (
        <Box
          width="100%"
          height="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography> No orders for now</Typography>
        </Box>
      ) : (
        <>
          {order.map((order: Order) => {
            return <OrderCompleteItem order={order} key={order.id} />;
          })}
        </>
      )}
    </Box>
  );
};

export default OrderCompleteList;
