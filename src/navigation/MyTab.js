import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";

import HomeStack from "./Navigation/HomeStack";
import { FavouriteItems } from "../Screens/FavouriteItems";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Cart from "../Screens/Cart";

const Tab = createBottomTabNavigator();
const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 2,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "white", // Set the active icon and label color
        tabBarInactiveTintColor: "gray", // Optionally, set the inactive icon and label color
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteItems}
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;
