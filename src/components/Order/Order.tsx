import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectSession } from "../../store/slices/session";
import OrderContainer from "../Container/OrderContainer";
import styles from "./Order.module.css";
import OrderCompleteList from "./OrderCompleteList/OrderCompleteList";
import OrderList from "./OrderList/OrderList";
import OrderTitle from "./OrderTitle/OrderTitle";
import { io } from "socket.io-client";
import { useSocket, useSocketEvent } from "socket.io-react-hook";

const Order = () => {
  const { businessId } = useAppSelector(selectSession);
  const { socket, error, connected } = useSocket("http://localhost:5000/");
  useEffect(() => {
    console.log(socket)
    socket.emit("join", businessId);
    socket.on("receive-order", (socket) => {
      console.log(socket, "data from room");
    });
  }, [socket]);

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
        </Box>

        {/* Accepted */}

        {/* <Box gridColumn="span 6" className={styles.section__container}>
          <OrderTitle
            title={"In Progress"}
            quantity={0}
          />
          <OrderList />
        </Box> */}

        {/* Ready */}

        {/* <Box gridColumn="span 2" className={styles.section__container}>
          <OrderTitle
            title={'Completed'}
            quantity={0}
          />
          <OrderCompleteList ordersData={readyOrders} />
        </Box> */}
      </Box>
    </OrderContainer>
  );
};

export default Order;
