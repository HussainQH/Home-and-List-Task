import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { StyleSheet } from "react-native";

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <Icon
      size={25}
      style={styles.cartButton}
      onPress={() => navigation.navigate("Cart")}
      name="cart"
    />
  );
};

const styles = StyleSheet.create({
  cartButton: {
    color: "blue",
    marginRight: 25,
  },
});

export default CartButton;
