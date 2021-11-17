import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { StyleSheet } from "react-native";
import { Badge } from "native-base";
import cartStore from "../../Stores/cartStore";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <>
      <Badge
        bg="red.400"
        colorScheme="danger"
        rounded="999px"
        mb={-2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}
      >
        {cartStore.totalQuantity}
      </Badge>
      <Icon
        size={25}
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
        name="cart"
      />
    </>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    color: "blue",
    marginRight: 25,
  },
});

export default observer(CartButton);
