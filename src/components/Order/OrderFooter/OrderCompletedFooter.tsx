import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { OrderFooterProps } from "../../../types";
const CustomReadyButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  marginTop: "15px",
  backgroundColor: "#513DEA",
  borderRadius: "8px",
  opacity: 1,
  width: "100%",
  height: "50px",
  "&:active": {
    backgroundColor: "#9487F3",
  },
  "&:focus": {
    backgroundColor: "#392BA4",
  },
  "&:hover": {
    backgroundColor: "#4937D3",
    border: "none",
  },
}));


const OrderCompletedFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
  status
}: OrderFooterProps) => {
  return (
    <>
      {" "}
      <CustomReadyButton variant="contained" onClick={acceptHandler}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Completed
        </Typography>
      </CustomReadyButton>
    </>
  );
};

export default OrderCompletedFooter;
