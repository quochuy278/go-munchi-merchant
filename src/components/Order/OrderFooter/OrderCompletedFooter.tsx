import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import FactoryDialog from "../../Dialog/Dialog";
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
interface FooterProps {
  prepTime: number;
  orderId: number;
  orderStatus: number;
  deliveryType: number;
}

const OrderCompletedFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
  status
}: OrderFooterProps) => {
  const [open, setOpen] = useState(false);
  const acceptHandler = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {" "}
      <CustomReadyButton variant="contained" onClick={acceptHandler}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Completed
        </Typography>
      </CustomReadyButton>
      <FactoryDialog
        isOrder={true}
        open={open}
        onClose={onClose}
        modalData={{
          deliveryType: deliveryType,
          orderId: orderId,
          status: orderStatus,
          newPrepTime: 25 as number,
        }}
      />
    </>
  );
};

export default OrderCompletedFooter;
