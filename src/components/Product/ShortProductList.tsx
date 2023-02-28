import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Product } from "../../types";
import styles from "./ShortProductList.module.css";
interface ProductProps {
  product: Product[];
  orderId: number;
}

const ShortProductList = ({ product, orderId }: ProductProps) => {
  return (
    <Box>
      {product?.map((product: Product) => {
        return (
          <Box key={product.id} className={styles.product_item_container}>
            <Box display="flex" width="90%" textAlign="left">
              <Typography fontSize="14px" lineHeight="16px" fontWeight={600}>
                {product.quantity}
              </Typography>
              <Typography
                fontSize="14px"
                lineHeight="16px"
                fontWeight={600}
                sx={{ marginX: "20px" }}
              >
                x
              </Typography>

              <Typography
                fontSize="14px"
                lineHeight="16px"
                fontWeight={600}
                sx={{ marginX: "20px" }}
              >
                {product.name}
              </Typography>
            </Box>
            {!product.comment ? null : (
              <Card
                sx={{
                  backgroundColor: "#F3F5F7",
                  width: "fit-content",
                  padding: 0.75,
                  marginTop: "5px",
                }}
              >
                <Typography fontSize="10px" lineHeight="13px">
                  {product.comment}
                </Typography>
              </Card>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ShortProductList;
