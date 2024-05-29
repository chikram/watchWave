import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import MyTab from "./src/navigation/MyTab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
