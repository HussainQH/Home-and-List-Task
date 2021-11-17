import { HStack } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import { baseURL } from "../Stores/instance";

const ProductItem = ({ product }) => {
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseURL + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
    </HStack>
  );
};

export default ProductItem;
