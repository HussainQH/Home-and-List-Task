import React from "react";

import { Text, Image, View } from "react-native";
import { baseURL } from "../Stores/instance";

const ShopItem = ({ shop }) => {
  console.log(shop);
  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: baseURL + shop.image }}
      />
      <Text> {shop.name} </Text>
    </View>
  );
};

export default ShopItem;
