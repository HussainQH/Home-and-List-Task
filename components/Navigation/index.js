import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/cartButton";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Cart" component={CartList} />

      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Choose a Shop", headerRight: () => <CartButton /> }}
      />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default RootNavigator;
