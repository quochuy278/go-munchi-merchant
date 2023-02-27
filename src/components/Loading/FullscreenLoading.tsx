import { Box, CircularProgress } from "@mui/material";
import React from "react";
import CenterContainer from "../Container/CenterContainer";

const FullscreenLoading = () => {
  return (
    <CenterContainer>
      <CircularProgress />
    </CenterContainer>
  );
};

export default FullscreenLoading;
