import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../../Screens/Main";
import Detail from "../../Screens/Detail";
import Start from "../../Screens/Start";
const stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="home"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Watch Detail"
        component={Detail}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
      <stack.Screen
        name="start"
        component={Start}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
    </stack.Navigator>
  );
};

export default HomeStack;
