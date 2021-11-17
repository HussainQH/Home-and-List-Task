import React from "react";
import { View, Text } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productsList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));

  return <View>{productsList}</View>;
};

export default ProductList;
