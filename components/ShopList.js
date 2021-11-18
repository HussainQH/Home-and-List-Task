import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import shopStore from "../Stores/shopStore";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} navigation={navigation} />
  ));

  return <ScrollView>{shopList}</ScrollView>;
};

export default observer(ShopList);
