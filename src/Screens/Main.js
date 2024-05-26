import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import watchCategory from "../data/watchCategory";
import watches from "../data/watches";
const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.search}>
          <AntDesign
            name="search1"
            size={22}
            color="gray"
            style={{ marginTop: 3 }}
          />
          <TextInput
            style={{ marginLeft: 5 }}
            placeholder="Search your watch"
          ></TextInput>
        </View>

        <FlatList
          data={watchCategory}
          renderItem={({ item }) => (
            <View style={styles.itemcontainer}>
              <Image source={{ uri: item.logo }} style={styles.image} />
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "gray",
                  marginTop: 5,
                }}
              >
                {item.brand}
              </Text>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.allwatch}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Popular Watch
          </Text>
        </View>
      </View>

      <FlatList
        data={watches}
        renderItem={({ item }) => (
          <View style={styles.popularitem}>
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color="black"
              style={{ marginTop: 5, marginLeft: 4 }}
            />
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginLeft: 14,
                marginTop: 5,
              }}
            >
              {item.model}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 14,
                marginBottom: 10,
              }}
            >
              ${item.price}
            </Text>
          </View>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  search: {
    marginTop: 40,
    borderRadius: 50,
    backgroundColor: "#ECECEC",
    padding: 12,
    margin: 25,
    flexDirection: "row",
  },
  itemcontainer: {
    margin: 8,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    resizeMode: "contain",
  },

  allwatch: {
    margin: 20,
  },
  img: {
    width: 150,
    aspectRatio: 1,
    alignSelf: "center",
  },
  popularitem: {
    width: "45%",
    backgroundColor: "#ECECEC",
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
});
