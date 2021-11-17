import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="ShopDetail">
      <Screen name="Home" component={Home} />
      <Screen name="ShopList" component={ShopList} />
      <Screen name="ShopDetail" component={ShopDetail} />
    </Navigator>
  );
};

export default RootNavigator;
