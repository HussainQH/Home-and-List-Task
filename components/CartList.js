import React from "react";
import { Center, VStack } from "native-base";
import cartStore from "../Stores/cartStore";
import CartItem from "./CartItem";
const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <Center>
      <VStack space="5">{cartList}</VStack>
    </Center>
  );
};
export default CartList;
