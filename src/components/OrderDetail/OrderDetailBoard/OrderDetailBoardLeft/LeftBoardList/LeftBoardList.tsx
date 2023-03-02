import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../../../../../types";
import styles from "./LeftBoardList.module.css";
export const LeftBoardList = ({ products }: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ overflowX: "hidden", overflowY: "scroll" }}
    >
      {products.map((product: Product, index: any) => {
        return (
          <Box className={styles.product__detail} key={index}>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box display="flex" alignItems="center">
                <Typography>{product.quantity}</Typography>
                <CloseIcon
                  sx={{
                    color: "#000000",
                    width: "10px",
                    height: "10px",
                    marginX: "20px",
                  }}
                />
                <Box>
                  <Typography fontSize="12px" lineHeight="16px">
                    {product.name}
                  </Typography>
                  {/* <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    sx={{ color: "#51545E" }}
                  >
                    Add ons: 1x chipotle sauce
                  </Typography> */}
                </Box>
              </Box>
              <Box textAlign="right">
                <Typography fontSize="12px" lineHeight="16px">
                  {product.price} €
                </Typography>
                {/* <Typography
                  fontSize="12px"
                  lineHeight="16px"
                  sx={{ color: "#51545E" }}
                >
                  + 2.20 €
                </Typography> */}
              </Box>
            </Box>
            <Box width="120%">
              <Divider sx={{ width: "100%", marginTop: "10px" }} />
            </Box>
            <Box sx={{ width: "90%" }}>
              {product.comment ? (
                <Box
                  sx={{
                    backgroundColor: "#F3F5F7",
                    width: "fit-content",
                    height: "fit-content",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    fontFamily="DM-sans"
                    fontWeight={600}
                  >
                    {product.comment}
                  </Typography>
                </Box>
              ) : null}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
