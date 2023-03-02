import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "./OrderDetailBoardLeft.module.css";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { LeftBoardFooter } from "./LeftBoardFooter/LeftBoardFooter";
import { LeftBoardList } from "./LeftBoardList/LeftBoardList";
import FullscreenLoading from "../../../Loading/FullscreenLoading";

const OrderDetailBoardLeft = ({ data }: any) => {
  if (!data) {
    return <FullscreenLoading />;
  }
  return (
    <Box gridColumn="span 6" className={styles.detail__content}>
      <Box className={styles.detail__card}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={styles.detail__title}
        >
          <Typography fontSize="18px" lineHeight="24px" fontWeight={600}>
            {data?.products.length} Items
          </Typography>
          {/* <IconButton sx={{ backgroundColor: "#F2F9FE", borderRadius: "8px" }}>
            <PrintIcon
              sx={{ marginRight: "10px", width: "14px", height: "14px" }}
              color="primary"
            />
            <Typography fontSize="12px" lineHeight="16px">
              Print
            </Typography>
          </IconButton> */}
        </Box>
        <Divider sx={{ width: "100%", marginTop: "10px" }} />
        <LeftBoardList products={data.products} />
      
      </Box>
      <Box className={styles.payment_container}>
        <Divider sx={{ width: "100%", marginBottom: "20px" }} />
        <LeftBoardFooter summary={data.summary}/>
      </Box>
    </Box>
  );
};

export default OrderDetailBoardLeft;
