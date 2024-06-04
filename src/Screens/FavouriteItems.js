import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { removeFavourite } from "../store/FavouriteItemSlice";

export const FavouriteItems = () => {
  const favoriteItems = useSelector((state) => state.favouriteItems.items); // Ensure correct state access
  const dispatch = useDispatch();

  const handleRemoveFavourite = (item) => {
    dispatch(removeFavourite(item));
  };

  return (
    <FlatList
      data={favoriteItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.detail}>
            <Text style={styles.model}>{item.model}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Buy now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveFavourite(item)}>
                <Ionicons
                  name="heart-sharp"
                  size={24}
                  color="red"
                  style={{ marginLeft: 5, marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 5,
    padding: 20,
    paddingLeft: 0,
    backgroundColor: "white",
    borderRadius: 20,
  },
  image: {
    width: 120,
    aspectRatio: 1,
  },
  detail: {
    flex: 1,
    alignItems: "flex-end",
  },
  model: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 100,
    alignItems: "center",
    padding: 10,
    width: "50%",
  },
  btnTxt: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
