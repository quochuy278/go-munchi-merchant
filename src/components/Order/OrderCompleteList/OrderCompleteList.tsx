import { Box, Typography } from "@mui/material";
import { OrderModel } from "../../../types";
import OrderCompleteItem from "../OrderCompleteItem/OrderCompleteItem";
import styles from "./OrderCompleteList.module.css";

interface OrderCompleteListProp {
  orders: OrderModel[];
}

const OrderCompleteList = ({ orders }: OrderCompleteListProp) => {
  return (
    <Box
      display="grid"
      className={styles.card__container}
      gridTemplateColumns="repeat(1, 1fr)"
      gap={2}
      paddingX={2}
    >
      {orders?.length === 0 ? (
        <Box
          width="100%"
          height="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography> No orders for now</Typography>
        </Box>
      ) : (
        <>
          {orders.map((order: OrderModel) => {
            return <OrderCompleteItem order={order} key={order.id} />;
          })}
        </>
      )}
    </Box>
  );
};

export default OrderCompleteList;
