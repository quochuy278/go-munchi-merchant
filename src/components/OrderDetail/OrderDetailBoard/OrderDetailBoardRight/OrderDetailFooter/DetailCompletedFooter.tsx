import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CountDownClock from "../../../../CountDownClock/CountDownClock";
import { FactoryButtonContent } from "../../../../Factory/ButtonContent/FactoryButtonContent";
export interface DetailFooterProps {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
  preparedIn:number
}

const DetailCompletedFooter = ({
  orderStatus,
  timeStamp,
  orderId,
  deliveryType,
  preparedIn,
}: DetailFooterProps) => {
  const [open, setOpen] = useState(false);

  const prepTimeInMs = preparedIn * 60 * 1000;
  const nowInMs = new Date().getTime();

  const dateTimeAfterPrepTime = prepTimeInMs + nowInMs;
  const onOpen = () => {
    setOpen(false);
  };

  const omClose = () => {
    setOpen(true);
  };
  return (
    <Box
      display="flex"
      width="calc(100% - 30px)"
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      padding="15px"
    >
      <Box height="100%" textAlign="left">
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            Create at
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            Accepted
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            Marked ready
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
      </Box>
      <Box
        height="50%"
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
      >
        <Box width="100%" height="30%" display="flex" alignItems="center">
          <Typography
            fontSize="20px"
            lineHeight="26px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            Ready in
          </Typography>
        </Box>
        <Box
          width="100%"
          textAlign="center"
          height="30%"
          sx={{ backgroundColor: "#F1F6ED", color: "#759F47" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius="8px"
          marginBottom="10px"
        >
          <CountDownClock targetDate={dateTimeAfterPrepTime} />
        </Box>
        <Box width="100%" height="30%">
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%", borderRadius: "8px" }}
            onClick={onOpen}
          >
            <FactoryButtonContent deliveryType={deliveryType} />
          </Button>
        </Box>
        {/* <DialogAlert
          open={open}
          newPrepTime={newPrepTime}
          onClose={acceptDialogCloseHandler}
          orderId={orderId}
          deliveryType={deliveryType}
          orderStatus={orderStatus}
          prepTime={newPrepTime}
        /> */}
      </Box>
    </Box>
  );
};

export default DetailCompletedFooter;
