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
  const now = moment().format("X");
  const orderFinishedTime = moment(createAt)
    .add(prepTime, "minutes")
    .format("X");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginTop: "15px" }}
    >
      <CountDownClock targetDate={parseInt(orderFinishedTime)} />
      <CustomAcceptedButton variant="contained" onClick={onOpen}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Accepted
        </Typography>
      </CustomAcceptedButton>
    </Box>
  );
};

export default OrderAcceptedFooter;
