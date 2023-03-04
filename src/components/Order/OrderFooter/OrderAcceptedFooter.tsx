import React, { useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import CountDownClock from "../../CountDownClock/CountDownClock";
import FactoryDialog from "../../Dialog/Dialog";
import { OrderFooterProps } from "../../../types";

const CustomAcceptedButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#74A047",
  borderRadius: "8px",
  opacity: 1,
  flex: 1,
  height: "50px",
  "&:active": {
    backgroundColor: "#98BD73",
  },
  "&:focus": {
    backgroundColor: "#5D8139",
  },
  "&:hover": {
    backgroundColor: "#5D8139",
    border: "none",
  },
}));

interface FooterProps {
  prepTime: number;
  orderId: number;
  orderStatus: number;
  deliveryType: number;
}

const OrderAcceptedFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
  status
}: OrderFooterProps) => {
  const [newPrepTime, setNewPrepTime] = useState(10);
  const [open, setOpen] = useState(false);
  const acceptHandler = () => {
    setOpen(true);
  };

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };

  const prepTimeInMs = prepTime * 60 * 1000;
  const nowInMs = new Date().getTime();

  const dateTimeAfterPrepTime = prepTimeInMs + nowInMs;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginTop: "15px" }}
    >
      <CountDownClock targetDate={dateTimeAfterPrepTime} />
      <CustomAcceptedButton variant="contained" onClick={acceptHandler}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Accepted
        </Typography>
      </CustomAcceptedButton>
      {/* <DialogAlert
        open={open}
        newPrepTime={newPrepTime}
        onClose={acceptDialogCloseHandler}
        orderId={orderId}
        deliveryType={deliveryType}
        orderStatus={orderStatus}
        prepTime={prepTime}
      /> */}

      <FactoryDialog
        isOrder={true}
        open={true}
        onClose={acceptDialogCloseHandler}
        modalData={{
          deliveryType: deliveryType,
          orderId: orderId,
          status: orderStatus,
        }}
      />
    </Box>
  );
};

export default OrderAcceptedFooter;
