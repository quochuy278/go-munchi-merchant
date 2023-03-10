import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
export const pendingStatus: number[] = [0];
export const acceptedStatus: number[] = [7, 8];
export const completedStatus: number[] = [1, 4, 9, 11, 15];

const Order = () => {
  const { businessId } = useAppSelector(selectSession);
  const { socket, error, connected } = useSocket(
    `${process.env.REACT_APP_API__URL_DEV}`
  );
  const [open, setOpen] = useState<boolean>(false);
  const [newOrder, setNewOrder] = useState<OrderModel>();
  const [play, { stop }] = useSound(music, {
    volume: 1,
    interrupt: false,
    loop: true,
  });

  useEffect(() => {
    socket.emit("join", businessId);
    socket.on("receive-order", (socket) => {
      console.log(socket);
      play();
      setOpen(true);
      setNewOrder(socket);
    });
  }, [socket, newOrder, open]);

  const onCloseDialog = () => {
    stop();
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
      </Box>
      {newOrder ? (
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle>New Order is here</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Customer: {newOrder.customer.name}
              Your new order detail {newOrder.id}
              Total: {newOrder.summary.total}
            </DialogContentText>

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
