import { Box, Typography } from "@mui/material";
import { OrderModel } from "../../../types";
import FullscreenLoading from "../../Loading/FullscreenLoading";
import OrderItem from "../OrderItem/OrderItem";

export interface FilterQuery {
  publicBusinessId: string;
  query?: string | null;
  paramsQuery: string[] | string;
}

interface OrderListProps {
  orders: OrderModel[];
}

const OrderList = ({ orders }: OrderListProps) => {
  if (!orders) {
    return <FullscreenLoading />;
  }

  return (
    <Box
      display="grid"
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
            return <OrderItem order={order} key={order.id} />;
          })}
        </>
      )}
    </Box>
  );
};

export default OrderList;
