import React from "react";
import { FavouriteItems } from "../../Screens/FavouriteItems";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

const FavouriteStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Favourite Items"
        component={FavouriteItems}
        options={{ headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
};

export default FavouriteStack;
