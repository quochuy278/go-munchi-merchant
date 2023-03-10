import React, { useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import CountDownClock from "../../CountDownClock/CountDownClock";
import FactoryDialog from "../../Dialog/Dialog";
import { OrderFooterProps } from "../../../types";
import moment from "moment";
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

const OrderAcceptedFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
  status,
  createAt,
  onOpen,
}: OrderFooterProps) => {
  const now = moment().format();
  const orderFinishedTime = moment(createAt).add(prepTime, "minutes");
  const orderCreatedAt = moment(orderFinishedTime).diff(now);
  const time = moment(orderCreatedAt).format("HH:mm:ss")
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
      <CustomAcceptedButton variant="contained" onClick={onOpen}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Accepted
        </Typography>
      </CustomAcceptedButton>
    </Box>
  );
};

export default OrderAcceptedFooter;
