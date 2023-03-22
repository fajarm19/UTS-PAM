import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Profil from "./Profil";
import DetailItem from "./DetailItem";
import BatteryStatus from "./BatteryStatus";

const Stack = createStackNavigator();

const Screen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={option} />
      <Stack.Screen name="Detail" component={BatteryStatus} options={option} />
      <Stack.Screen name="Profil" component={Profil} options={option} />
      <Stack.Screen
        name="Detail Item"
        component={DetailItem}
        options={option}
      />
    </Stack.Navigator>
  );
};

const option = {
  headerTitleAlign: "center",
  headerTintColor: "white",
  headerTransparent: true,
  headerTitleStyle: { color: "#fbf1c7" },
};

export default Screen;
