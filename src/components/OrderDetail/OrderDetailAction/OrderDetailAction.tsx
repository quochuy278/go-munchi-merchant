import { Box } from '@mui/material';
import CenterContainer from '../../Container/CenterContainer';
import OrderFooterDetailFactory from '../../Factory/OrderDetailFooterFactory/OrderDetailFooterFactory';
import FullscreenLoading from '../../Loading/FullscreenLoading';
import OrderDetailCustomerInfo from '../OrderDetailCustomerInfo/OrderDetailCustomerInfor';
import styles from "./OrderDetailAction.module.css";
export const OrderDetailAction = ({ data }: any) => {
  if (!data) {
    return (
      <CenterContainer>
        <FullscreenLoading/>
      </CenterContainer>
    )
  }
  const { customer, createdAt, status, deliveryType, id, preparedIn } = data;
  return (
    <Box gridColumn="span 6" className={styles.detail__info__container}>
      <OrderDetailCustomerInfo
        name={customer.name}
        deliveryType={deliveryType}
      />
      <Box className={styles.detail__time__section}>
        <OrderFooterDetailFactory
          createdAt={createdAt}
          orderStatus={status}
          deliveryType={deliveryType}
          orderId={id}
          preparedIn={preparedIn}
        />
      </Box>
    </Box>
  )
}
