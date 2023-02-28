import React from "react";
import { Product } from "../../../types";
import LongProductList from "../../Product/LongProductList";
import ShortProductList from "../../Product/ShortProductList";

interface FactoryProductProps {
  product: Product[];
  orderId: number
}

const ProductFactory = ({ product,orderId }: FactoryProductProps) => {
  switch (true) {
    case product.length >= 5:
      return <LongProductList product={product} orderId={orderId}/>;

    default:
      return <ShortProductList product={product}  orderId={orderId}/>;
  }
};

export default ProductFactory;
