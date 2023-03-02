import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";

interface OrderTitleProps {
  title: string;
  quantity: number;
}
const CustomeTypography = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "16px",
  fontWeight: 600,
}));

const CustomeBox = styled(Box)(({ theme }) => ({
  height: "20px",
  width: "15px",
  backgroundColor: "white",
  textAlign: "center",
  marginLeft: "5px",
  padding: '2px',
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const OrderTitle = ({ title, quantity }: OrderTitleProps) => {
  return (
    <Box gridColumn="span 2" sx={{ padding: "10px" }} display="flex">
      <CustomeTypography variant="h5">{title}</CustomeTypography>
      <CustomeBox>
        <Typography fontSize="12px">{quantity}</Typography>
      </CustomeBox>
    </Box>
  );
};

export default OrderTitle;
