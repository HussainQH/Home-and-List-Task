import { Text, Image, View } from "react-native";
import React from "react";

import shopStore from "../Stores/shopStore";
import { styles } from "../styles";
import { baseURL } from "../Stores/instance";
import { Spinner } from "native-base";
import ProductList from "./ProductList";
const ShopDetail = ({ navigation, route }) => {
  if (shopStore.isLoading) return <Spinner />;

  const shop = route.params.shop;
  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseURL + shop.image }}
      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>

      <ProductList products={shop.products} />
    </View>
  );
};
export default ShopDetail;
