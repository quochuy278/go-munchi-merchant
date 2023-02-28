import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FooterProps {
  prepTime: number;
  orderId: number;
  orderStatus: number;
  deliveryType: number;
}

const OrderPendingFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
}: FooterProps) => {
  const [newPrepTime, setNewPrepTime] = useState(10);
  const presetPreparationTimes = [5, 10, 30];
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    setNewPrepTime(time);
  };
  const [open, setOpen] = useState(false);
  const acceptHandler = () => {
    setOpen(true);
  };

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      sx={{ marginTop: "15px" }}
      rowGap={2}
    >
      {presetPreparationTimes.map((time) => {
        return (
          <Box gridColumn="span 1" key={Math.random()}>
            <Button
              variant="contained"
              onClick={(event) => setTimeHandler(event, time)}
              type="submit"
              {...(time === newPrepTime
                ? {
                    sx: {
                      backgroundColor: "#F1F6ED",
                      color: "#74A047",
                      display: "flex",
                      flexDirection: "column",
                      width: "90%",
                      height: "54px",
                      borderRadius: "8px",

                      "&:focus": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                      "&:active": {
                        backgroundColor: "#5D8139",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "none",
                      },
                      "&.MuiButton-selected": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                    },
                  }
                : {
                    sx: {
                      backgroundColor: "#F3F5F7",
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      width: "90%",
                      height: "54px",
                      borderRadius: "8px",

                      "&:focus": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                      "&:hover": {
                        backgroundColor: "none",
                      },
                      "&:active": {
                        backgroundColor: "#5D8139",
                        color: "white",
                      },
                      "&.MuiButton-selected": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                    },
                  })}
            >
              <Typography
                fontSize="16px"
                lineHeight="21px"
                fontWeight={600}
                fontFamily="Dm-sans-bold"
              >
                {time}
              </Typography>
              <Typography fontSize="7px" lineHeight="9px" textTransform="none">
                min.
              </Typography>
            </Button>
          </Box>
        );
      })}

      <Box gridColumn="span 1">
        <IconButton
          sx={{
            width: "90%",
            height: "54px",
            backgroundColor: "#FDF4F3",
            borderRadius: "8px",
            border: "none",
            "&:active": {
              backgroundColor: "#FF2828",
              svg: {
                color: "white",
              },
            },
            "&:focus": {
              border: "none",
              "&:hover": {
                backgroundColor: "none",
              },
            },
          }}
          disableFocusRipple={true}
          disableTouchRipple={true}
        >
          <CloseIcon sx={{ color: "#FF5F5F" }} />
        </IconButton>
      </Box>

      <Box gridColumn="span 2">
        <Button
          {...(newPrepTime ? { variant: "contained" } : { disabled: true })}
          sx={{
            width: "calc(100% - 10px)",
            height: "54px",
            borderRadius: "8px",
            border: "none",
          }}
          onClick={acceptHandler}
        >
          Accept
        </Button>
      </Box>
      {/* <DialogAlert
          open={open}
          newPrepTime={newPrepTime}
          onClose={acceptDialogCloseHandler}
          orderId={orderId}
          deliveryType={deliveryType}
          orderStatus={orderStatus}
          prepTime={prepTime}
        /> */}
    </Box>
  );
};

export default OrderPendingFooter;
