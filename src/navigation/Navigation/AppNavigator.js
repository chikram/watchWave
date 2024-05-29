// src/navigation/AppNavigator.js
import React from "react";
import Start from "../../Screens/Start";
import MyTab from "../MyTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="start" component={Start} />
      <stack.Screen name="MainTabs" component={MyTab} />
    </stack.Navigator>
  );
};

export default AppNavigator;
