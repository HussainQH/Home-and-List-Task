import { HStack, VStack } from "native-base";
import NumericInput from "react-native-numeric-input";
import React, { useState } from "react";
import { Text, Image } from "react-native";
// import { baseURL } from "../Stores/instance";
import { Button } from "native-base";
import cartStore from "../Stores/cartStore";
import { observer } from "mobx-react";
import { baseURL } from "../Stores/instance";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, product };

    cartStore.addItemToCart(newItem);
  };
  const product = item.product;
  return (
    <VStack>
      <HStack w="100%" alignItems="center" space="3">
        <Image
          source={{
            uri: baseURL + product.image,
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{product.name}</Text>
        <Text>quantity: {item.quantity}</Text>
        <Text>total: {item.quantity * product.price} KD</Text>
      </HStack>
      <HStack>
        <NumericInput
          rounded
          value={quantity}
          onChange={(value) => setQuantity(value)}
          totalHeight={30}
          totalWidth={60}
          minValue={1}
        />
        <Button marginLeft="10" onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default observer(CartItem);
