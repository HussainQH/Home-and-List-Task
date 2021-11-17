import React from "react";

import { Text, Image, View } from "react-native";
import { baseURL } from "../Stores/instance";
import { Button } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  console.log(shop);
  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: baseURL + shop.image }}
      />

      <Text> {shop.name} </Text>
      <Button onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        Details
      </Button>
    </View>
  );
};

export default ShopItem;
