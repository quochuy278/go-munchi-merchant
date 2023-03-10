import { Box, IconButton, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
import { OrderModel } from "../../../types";
import { IconFactory } from "../../Factory/Icons/IconFactory";
import { OrderFooterFactory } from "../../Factory/OrderFooter/OrderFactory";
import ProductFactory from "../../Factory/Product/ProductFactory";
import styles from "./OrderItem.module.css";
interface OrderProps {
  order: OrderModel;
}
// tu in progress chuyen qua ready luon luon la so 4
const OrderItem = ({ order }: OrderProps) => {
  const createdAt = moment(order.createdAt).format("HH:mm")
  return (
    <Box className={styles.main__card__container} key={order.id}>
      <Link
        to={`/${order.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Box component="form">
          <Box
            display="flex"
            sx={{ width: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "40%" }}
            >
              <Typography
                lineHeight="29px"
                fontSize="22px"
                fontWeight={600}
                textAlign="left"
              >
                # {order.id}
              </Typography>
              <div className={styles.divider}></div>
              <Typography lineHeight="18px" fontSize="14px" fontWeight={600}>
                {order.customer.name}
              </Typography>
            </Box>
            <Box>
              <IconButton
                sx={{
                  borderRadius: "3px",
                  border: "1px solid #F3F5F7",
                  opacity: 1,
                }}
              >
                <IconFactory orderType={order.deliveryType} />
              </IconButton>
            </Box>
          </Box>
          <Typography
            textAlign="left"
            sx={{ color: "#707070" }}
            fontSize="12px"
            lineHeight="10px"
          >
            Today at {createdAt}
          </Typography>
          <Box className={styles.card__item__container}>
            <ProductFactory product={order.products} orderId={order.id} />
          </Box>
        </Box>
      </Link>
      <OrderFooterFactory
        orderStatus={order.status}
        orderId={order.id}
        deliveryType={order.deliveryType}
        prepTime={order.preparedIn}
        status={order.status}
        createAt={order.createdAt}
      />
    </Box>
  );
};

export default OrderItem;
