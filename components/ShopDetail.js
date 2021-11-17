import { Text, Image, View } from "react-native";
import React from "react";

import shopStore from "../Stores/shopStore";
import { styles } from "../styles";
const ShopDetail = () => {
  const shop = shopStore.shops[0];
  return (
    <View style={styles.shopDetailWrapper}>
      <Image style={styles.shopDetailImage} source={{ uri: shop.image }} />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
    </View>
  );
};
export default ShopDetail;
