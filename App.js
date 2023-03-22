import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./components/Screen";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <NavigationContainer>
      <Screen />
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default App;
