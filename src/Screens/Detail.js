import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import watches from "../data/watches";
import { useSelector } from "react-redux";

const Detail = () => {
  const watch = useSelector((state) => state.watches.selectedItem);

  watches[watch];

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: watch.image }} style={styles.image} />
      </View>
      <View style={styles.deatil}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{watch.brand}</Text>
          <Text
            style={{
              marginTop: 24,
              fontSize: 16,
              fontWeight: "500",
              marginLeft: -10,
            }}
          >
            ~ {watch.model}
          </Text>
        </View>
        <Text style={styles.description}>{watch.description}</Text>
        <Text style={styles.feature}>Features</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bulletSymbol}>•</Text>
          <Text style={styles.featureText}>{watch.feature1}</Text>
        </View>
        <View style={styles.bulletContainer}>
          <Text style={styles.bulletSymbol}>•</Text>
          <Text style={styles.featureText}>{watch.feature2}</Text>
        </View>
        <View style={styles.bulletContainer}>
          <Text style={styles.bulletSymbol}>•</Text>
          <Text style={styles.featureText}>{watch.feature3}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={{ marginTop: -20 }}>
          <Text style={{ fontWeight: "500" }}>Price</Text>
          <Text style={{ fontWeight: "900", fontSize: 20 }}>
            ${watch.price}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "80%",
    aspectRatio: 1,
    margin: 20,
    marginBottom: 45,
  },
  deatil: {
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -20,
  },
  title: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    margin: 20,
    marginBottom: 10,
    marginTop: -10,
    color: "gray",
  },
  feature: {
    margin: 20,
    marginTop: 0,
    marginBottom: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
  bulletContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletSymbol: {
    fontSize: 18,
    marginRight: 5,
    marginLeft: 20,
  },
  featureText: {
    color: "gray",
  },
  btnContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    top: "20%",
  },
  btn: {
    backgroundColor: "black",
    bottom: 30,
    width: "60%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    marginLeft: 10,
  },
  btnTxt: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default Detail;
