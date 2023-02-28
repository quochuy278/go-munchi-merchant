import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Product } from "../../types";
import styles from "./LongProductList.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface ProductProps {
  product: Product[];
  orderId: number;
}

const LongProductList = ({ product, orderId }: ProductProps) => {
  const [selectedOrderIDs, setSelectedOrderIDs] = useState<number[]>([]);
  const handleOrderPressed = (id: number) => () => {
    setSelectedOrderIDs((prevState) =>
      prevState.includes(id)
        ? // If ID is already selected, remove it
          prevState.filter((orderId) => orderId !== id)
        : // If ID is not selected, add it
          [...prevState, id]
    );
  };
  const renderProduct = product!.slice(0, 2);
  const filterProduct = product!.filter(
    (item: Product, index: number) => index >= 2
  );

  return (
    <Box className={styles.product_item_container}>
      <Box
        display="flex"
        width="90%"
        textAlign="left"
        flexDirection={"column"}
        justifyContent="center"
      >
        {renderProduct.map((product: Product) => {
          return (
            <>
              <Box
                display={"flex"}
                key={product.id}
                sx={{ padding: "5px" }}
                width="100%"
              >
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
            </>
          );
        })}
        <Accordion
          key={orderId}
          expanded={selectedOrderIDs.includes(orderId)}
          onChange={handleOrderPressed(orderId)}
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
          }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            See more
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, paddingY: 2 }}>
            {filterProduct.map((product: any) => {
              return (
                <Box
                  display={"flex"}
                  key={product.id}
                  sx={{ padding: "5px" }}
                  width="100%"
                >
                  <Typography
                    fontSize="14px"
                    lineHeight="16px"
                    fontWeight={600}
                  >
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
                    sx={{ marginX: "20px", opacity: "0.98px" }}
                  >
                    {product.name}
                  </Typography>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default LongProductList;
