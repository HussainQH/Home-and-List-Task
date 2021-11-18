import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/cartButton";
import Signin from "../Signin";
import Signup from "../Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Signup">
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
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
