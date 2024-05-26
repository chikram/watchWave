import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Start from "./src/Screens/Start";
import Main from "./src/Screens/Main";
import Detail from "./src/Screens/Detail";
import { FavouriteItems } from "./src/Screens/FavouriteItems";

export default function App() {
  return (
    <>
      {/* <Start /> */}
      {/*   <Main /> */}
      {/*    <Detail /> */}
      <FavouriteItems />

      <StatusBar style="auto" />
    </>
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
