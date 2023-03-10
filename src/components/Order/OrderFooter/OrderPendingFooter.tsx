import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useUpdateOrderMutation } from "../../../store/slices/api";
import { OrderFooterProps } from "../../../types";

const OrderPendingFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
}: OrderFooterProps) => {
  const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation();
  const [newPrepTime, setNewPrepTime] = useState(10);
  const presetPreparationTimes = [5, 10, 30];
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    setNewPrepTime(time);
  };

  const updateOrderHandler = async () => {
    await updateOrder({
      orderId: orderId,
      orderStatus: 7,
      newPrepTime: newPrepTime,
    });
  };
  const onCancelOrder = async () => {
    await updateOrder({
      orderId: orderId,
      orderStatus: 5,
    });
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
          onClick={onCancelOrder}
        >
          <CloseIcon sx={{ color: "#FF5F5F" }} />
        </IconButton>
      </Box>

      <Box gridColumn="span 2">
        <Button
          {...(newPrepTime ? { variant: "contained" } : { disabled: true })}
          {...(isUpdating ? { disabled: true } : { disabled: false })}
          sx={{
            width: "calc(100% - 10px)",
            height: "54px",
            borderRadius: "8px",
            border: "none",
          }}
          onClick={updateOrderHandler}
        >
          Accept
        </Button>
      </Box>
    </Box>
  );
};

export default OrderPendingFooter;
