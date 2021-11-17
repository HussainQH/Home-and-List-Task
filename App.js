import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, View } from "native-base";
import React from "react";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
