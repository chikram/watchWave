import React from "react";
import Main from "../Screens/Main";
import Detail from "../Screens/Detail";
import { FavouriteItems } from "../Screens/FavouriteItems";
import Start from "../Screens/Start";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="start"
          component={Start}
          options={{
            headerShown: false,
          }}
        />
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
        <stack.Screen name="favourite" component={FavouriteItems} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
