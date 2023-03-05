import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectSession } from "../../store/slices/session";
import OrderContainer from "../Container/OrderContainer";
import styles from "./Order.module.css";
import OrderCompleteList from "./OrderCompleteList/OrderCompleteList";
import OrderList from "./OrderList/OrderList";
import OrderTitle from "./OrderTitle/OrderTitle";
import { io } from "socket.io-client";
import { useSocket, useSocketEvent } from "socket.io-react-hook";
import FactoryDialog from "../Dialog/Dialog";
import useSound from "use-sound";
import music from "../../assets/sounds/song.mp3";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
} from "@mui/material";
import { OrderModel } from "../../types";
import OrderItem from "./OrderItem/OrderItem";
import OrderSection from "./OrderSection/OrderSection";

export const pendingStatus: number[] = [0];
export const acceptedStatus: number[] = [1, 3, 6, 7];
export const completedStatus: number[] = [10, 11, 12, 13];

const Order = () => {
  const { businessId } = useAppSelector(selectSession);
  const { socket, error, connected } = useSocket("http://localhost:5000/");
  const [open, setOpen] = useState<boolean>(false);
  const [newOrder, setNewOrder] = useState<OrderModel>();
  const [playBoop, { stop, pause }] = useSound(music, {
    volume: 1,
    interrupt: false,
    loop: true,
  });
  useEffect(() => {
    socket.emit("join", businessId);
    socket.on("receive-order", (socket) => {
      console.log(socket, "data from room");
      if (!socket) {
        return <h1>Loading ...</h1>;
      }
      if (!open) stop();
      else playBoop();
      onHandleModal();
      setNewOrder(socket);
    });
  }, [socket, newOrder, open]);

  const onCloseDialog = () => {
    setOpen(false);
    stop();
  };
  const onStop = () => {
    setOpen(false);
  };
  console.log(newOrder);
  const onHandleModal = () => {
    setOpen(true);
    playBoop();
  };
  if (!open) stop();
  return (
    <OrderContainer>
      <Box
        display="grid"
        gridTemplateColumns="repeat(14, 1fr)"
        gap={2}
        sx={{ width: "100%", padding: "10px" }}
      >
        <OrderSection
          status={pendingStatus}
          isCompleted={false}
          span={6}
          title={"Pending"}
        />
        <OrderSection
          status={acceptedStatus}
          isCompleted={false}
          span={6}
          title={"On Progress"}
        />
        <OrderSection
          status={completedStatus}
          isCompleted={true}
          span={2}
          title={"Completed"}
        />

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
      <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
        <DialogTitle>New Order is here</DialogTitle>
        <DialogContent>
          <DialogContentText>Your new order detail</DialogContentText>{" "}
          <DialogContentText>
            <OrderItem order={newOrder!} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog}>Close</Button>
          <Button onClick={onCloseDialog}>Confirm</Button>
        </DialogActions>
        {/* <LinearProgress color="secondary" /> */}
      </Dialog>
    </OrderContainer>
  );
};

export default Order;
