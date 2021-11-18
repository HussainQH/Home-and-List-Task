import React from "react";
import { Center, VStack, ScrollView } from "native-base";
import cartStore from "../Stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button } from "native-base";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <ScrollView>
      <Center>
        <VStack space="5">{cartList}</VStack>
      </Center>
      <Button
        marginTop="10"
        onPress={() => {
          cartStore.checkout();
        }}
      >
        Checkout
      </Button>
    </ScrollView>
  );
};
export default observer(CartList);
