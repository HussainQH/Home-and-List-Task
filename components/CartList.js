import React from "react";
import { Center, VStack, ScrollView } from "native-base";
import cartStore from "../Stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button } from "native-base";
import authStore from "../Stores/authStore";
import { Alert } from "react-native";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  const handlePress = () => {
    if (authStore.user) {
      cartStore.checkout();
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <ScrollView>
      <Center>
        <VStack space="5">{cartList}</VStack>
      </Center>
      <Button
        marginTop="10"
        onPress={() => {
          handlePress();
        }}
      >
        Checkout
      </Button>
    </ScrollView>
  );
};
export default observer(CartList);
