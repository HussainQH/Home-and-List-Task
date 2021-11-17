import { HStack } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import cartStore from "../Stores/cartStore";
import { baseURL } from "../Stores/instance";
import { Button } from "native-base";

const ProductItem = ({ product }) => {
  const handleAdd = () => {
    const newItem = {
      product: product,
      quantity: 1,
    };
    cartStore.addItemToCart(newItem);
  };

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
      <Button onPress={handleAdd}>Add to cart</Button>
    </HStack>
  );
};

export default ProductItem;
