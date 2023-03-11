import { Box, Divider, Typography } from "@mui/material";
import { Product } from "../../../types";
import OrderDetailProductItem from "../OrderDetailProductItem/OrderDetailProductItem";
const OrderDetailProducList = ({ products }: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{ overflowX: "hidden", overflowY: "scroll" }}
    >
      {products.map((product: Product, index: any) => {
        return <OrderDetailProductItem product={product} key={index}/>;
      })}
    </Box>
  );
};

export default OrderDetailProducList;
