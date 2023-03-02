import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { FactoryButtonContent } from "../../../../Factory/buttonContent/FactoryButtonContent";
export interface DetailFooterProps {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
}

const DetailCompletedFooter = ({
  orderStatus,
  timeStamp,
  orderId,
  deliveryType,
}: DetailFooterProps) => {
  const [open, setOpen] = useState(false);
  const [newPrepTime, setNewPrepTime] = useState(10);

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    if (time) setNewPrepTime(time);
    else setNewPrepTime(event.target.value);
  };
  const acceptHandler = () => {
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
          <Typography
            fontSize="20px"
            lineHeight="26px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            10
          </Typography>
          <Typography
            fontSize="8px"
            lineHeight="10px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            mins
          </Typography>
        </Box>
        <Box width="100%" height="30%">
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%", borderRadius: "8px" }}
            onClick={acceptHandler}
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
