import React, { useState } from "react";
import { DetailFooterProps } from "../../../types";
import {
  Box,
  Typography,
  TextField,
  Button,
  LinearProgress,
} from "@mui/material";
import styles from "./OrderDetailFooter.module.css";
import { useUpdateOrderMutation } from "../../../store/slices/api";
import moment from "moment";
const timeAvailable = [1, 5, 10, 15, 20, 30];
export const PendingFooter = ({ createdAt, orderId }: DetailFooterProps) => {
  const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation();
  const [inputVisible, setInputVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [newPrepTime, setNewPrepTime] = useState(10);
  const InputVisibleHandler = () => {
    setInputVisible(true);
  };
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    if (time) {
      setNewPrepTime(time);
      setInputVisible(false);
    } else {
      setNewPrepTime(event.target.value);
    }
  };
  const updateOrderHandler = async () => {
    await updateOrder({
      orderId: orderId,
      orderStatus: 7,
      newPrepTime: newPrepTime,
    });
  };

  return (
    <>
      <Box className={styles.detail__time__info}>
        <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
          Create at {moment(createdAt).format("DD:MM:YYYY HH:mm:ss")}
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        sx={{
          padding: "20px",
          height: "calc(100% - 80px)",
        }}
        gap={1}
        rowGap={1}
      >
        <Box
          gridColumn="span 4"
          sx={{ padding: 0 }}
          display="flex"
          alignItems="center"
        >
          <Typography
            fontSize="20px"
            lineHeight="26px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            Ready in
          </Typography>
          <TextField
            id="outlined-basic"
            label="Time"
            variant="outlined"
            {...(inputVisible
              ? { sx: { marginLeft: "20px" } }
              : { sx: { marginLeft: "20px", display: "none" } })}
            type="number"
            inputProps={{ maxLength: 3 }}
            onChange={(e: any) => {
              setNewPrepTime(e.target.value);
            }}
          />
        </Box>
        {timeAvailable.map((time, index) => {
          return (
            <Box gridColumn="span 1" key={`${index}`}>
              <Button
                variant="contained"
                className={styles.time__btn}
                {...(time === newPrepTime
                  ? {
                      sx: {
                        backgroundColor: "#F1F6ED",
                        color: "black",
                        padding: 0,
                        borderRadius: "8px",
                        boxShadow: "none",

                        "&:focus": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:active": {
                          backgroundColor: "#5D8139",
                          color: "white",
                        },
                        "&.MuiButton-selected": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:hover": {
                          backgroundColor: "#759F47",
                          color: "#F1F6ED",
                        },
                      },
                    }
                  : {
                      sx: {
                        backgroundColor: "#F3F5F7",
                        color: "black",
                        padding: 0,
                        borderRadius: "8px",
                        boxShadow: "none",
                        "&:focus": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:active": {
                          backgroundColor: "#5D8139",
                          color: "white",
                        },
                        "&.MuiButton-selected": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:hover": {
                          backgroundColor: "#759F47",
                          color: "#F1F6ED",
                        },
                      },
                    })}
                onClick={(event) => setTimeHandler(event, time)}
              >
                <Box>
                  <Typography
                    fontSize="20px"
                    lineHeight="26px"
                    fontFamily="DM-sans-bold"
                  >
                    {time}
                  </Typography>
                  <Typography
                    fontSize="8px"
                    lineHeight="10px"
                    textTransform="none"
                  >
                    mins
                  </Typography>
                </Box>
              </Button>
            </Box>
          );
        })}

        <Box gridColumn="span 2">
          <Button
            variant="contained"
            className={styles.time__btn}
            sx={{
              backgroundColor: "#F3F5F7",
              color: "black",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
              "&:hover": {
                color: "white",
              },
            }}
            onClick={InputVisibleHandler}
          >
            <Typography>Custom</Typography>
          </Button>
        </Box>
        <Box gridColumn="span 2">
          <Button
            variant="contained"
            className={styles.time__btn}
            sx={{
              backgroundColor: "#FDF4F3",
              color: "black",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
              "&:active": {
                backgroundColor: "#FF2828",
                svg: {
                  color: "white",
                },
              },
              "&:focus": {
                border: "none",
              },
              "&:hover": {
                backgroundColor: "#FF2828",
                color: "white",
              },
            }}
            disableFocusRipple={true}
            disableTouchRipple={true}
          >
            <Typography>Decline</Typography>
          </Button>
        </Box>
        <Box gridColumn="span 2">
          <Button
            {...(newPrepTime ? { variant: "contained" } : { disabled: true })}
            variant="contained"
            className={styles.time__btn}
            sx={{
              backgroundColor: "#F3F5F7",
              color: "black",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
              "&:hover": {
                color: "white",
              },
            }}
            onClick={updateOrderHandler}
          >
            <Typography>Accept</Typography>
          </Button>
        </Box>
      </Box>
      {isUpdating ? <LinearProgress color="secondary" /> : null}
    </>
  );
};
