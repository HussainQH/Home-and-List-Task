import React from "react";
import { styles } from "../styles";
import { Text, View } from "react-native";

import { Button } from "native-base";

function Home({ navigation }) {
  return (
    <View>
      <Text>Hi you</Text>
      <Button onPress={() => navigation.navigate("ShopList")}>
        Shops List
      </Button>
    </View>
  );
}

export default Home;
