export type OrderModel = {
  id: number;
  status: number;
  summary: Summary;
  customer: Customer;
  products: Product[];
  preparedIn: number;
  deliveryType: number;
  createdAt: string;
};

export interface Summary {
  delivery_price: number;
  tax: number;
  total: number;
}

export interface Customer {
  id: number;
  name: string;
  lastName: string;
  email: string;
  address: string;
  ordersCount: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  comment: string | null;
}


export interface UpdateOrderData {
  orderId: number;
  newPrepTime?: number;
  orderStatus: number;
}

export interface OrderFooterProps {
  prepTime: number;
  orderId: number;
  orderStatus: number;
  deliveryType: number;
  status: number;
}