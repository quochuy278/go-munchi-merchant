import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSocket } from "socket.io-react-hook";
import useSound from "use-sound";
import music from "../../assets/sounds/song.mp3";
import { useAppSelector } from "../../store/hooks";
import { selectSession } from "../../store/slices/session";
import { OrderModel } from "../../types";
import OrderContainer from "../Container/OrderContainer";
import OrderSection from "./OrderSection/OrderSection";
import style from "./Order.module.css";
import ProductFactory from "../Factory/product/ProductFactory";
export const pendingStatus: number[] = [0];
export const acceptedStatus: number[] = [7, 8];
export const completedStatus: number[] = [1, 4, 9, 11, 15];

const Order = () => {
  const { businessId } = useAppSelector(selectSession);
  const { socket, error, connected } = useSocket(
    `${process.env.REACT_APP_API__URL_DEV}`
  );
  const [open, setOpen] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [newOrder, setNewOrder] = useState<OrderModel>();
  const [play, { stop }] = useSound(music, {
    volume: 1,
    interrupt: false,
    loop: true,
  });

  useEffect(() => {
    socket.emit("join", businessId);
    socket.on("new-order-notification", (socket) => {
      console.log(socket);

      play();
      setRefetch(true);
      setOpen(true);
      setNewOrder(socket);
    });
    socket.on("order-status-change", (socket) => {
      console.log(socket);
    });
  }, [socket, newOrder, open]);

  const onCloseDialog = () => {
    stop();
    setRefetch(false);

    setOpen(false);
  };

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
          refetch={refetch}
        />
        <OrderSection
          status={acceptedStatus}
          isCompleted={false}
          span={6}
          title={"On Progress"}
          refetch={refetch}
        />
        <OrderSection
          status={completedStatus}
          isCompleted={true}
          span={2}
          title={"Completed"}
          refetch={refetch}
        />
      </Box>
      {newOrder ? (
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle>New Order is here </DialogTitle>
          <DialogContent className={style.dialog__content__container}>
            <Box className={style.dialog__content}>
              <Box>
                <Typography variant="h6"> Order: # {newOrder.id}</Typography>
                <Typography variant="h6">
                  {" "}
                  Customer: {newOrder.customer.name}{" "}
                  {newOrder.customer.lastName}
                </Typography>
              </Box>
              <Box className={style.dialog__content__product}>
              <Typography variant="h6">
                 Order Detail
                </Typography>
                <ProductFactory
                  orderId={newOrder.id}
                  product={newOrder.products}
                />
              </Box>
            </Box>
            <Box className={style.dialog__content__summary}>
              <Typography variant="h6">
                Total: {newOrder.summary.total} €
              </Typography>
            </Box>

            <DialogContentText></DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={onCloseDialog}>Close</Button>
            <Button onClick={onCloseDialog}>Confirm</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle>No order</DialogTitle>
          <DialogContent>
            <DialogContentText>No order</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseDialog}>Close</Button>
            <Button onClick={onCloseDialog}>Confirm</Button>
          </DialogActions>
        </Dialog>
      )}
    </OrderContainer>
  );
};

export default Order;
