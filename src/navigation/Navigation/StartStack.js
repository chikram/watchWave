import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../../Screens/Start";

const stack = createNativeStackNavigator();
const StartStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="start"
        component={Start}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default StartStack;
