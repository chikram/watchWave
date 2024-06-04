import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import watches from "../data/watches";
import React from "react";

const Cart = () => {
  return (
    <FlatList
      data={watches}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.detail}>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.model}>{item.model}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    marginTop: 25,
    marginBottom: 2,
    padding: 10,
    paddingLeft: 0,
    backgroundColor: "white",
    borderRadius: 20,
  },
  image: {
    width: 130,
    height: 130,
    marginLeft: 15,
  },
  detail: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 15,
  },
  brand: {
    fontWeight: "bold",
  },
  model: {
    marginLeft: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 50,
  },
});
