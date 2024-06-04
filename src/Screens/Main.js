import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import watchCategory from "../data/watchCategory";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { WatchSlice } from "../store/WatchSlice";
import { addFavourite, removeFavourite } from "../store/FavouriteItemSlice";

const Main = () => {
  const watches = useSelector((state) => state.watches.watches || []);
  const favoriteItems = useSelector((state) => state.favouriteItems.items); // Ensure correct state access
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Filter watches based on search input
  const filteredWatches = watches.filter((watch) =>
    watch.model.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (watch) => {
    if (favoriteItems.find((item) => item.id === watch.id)) {
      dispatch(removeFavourite(watch));
    } else {
      dispatch(addFavourite(watch));
    }
  };

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
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {search.length === 0 && (
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
        )}

        <View style={styles.allwatch}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {search.length === 0 ? "Popular Watches" : "Search Results"}
          </Text>
        </View>
      </View>

      <FlatList
        data={filteredWatches}
        renderItem={({ item }) => (
          <View style={styles.popularitem}>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <MaterialIcons
                name={
                  favoriteItems.find((fav) => fav.id === item.id)
                    ? "favorite"
                    : "favorite-outline"
                }
                size={24}
                color={
                  favoriteItems.find((fav) => fav.id === item.id)
                    ? "red"
                    : "black"
                }
                style={{ marginTop: 5, marginLeft: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //update selected products
                dispatch(WatchSlice.actions.selectedItem(item.id));
                navigation.navigate("Watch Detail");
              }}
            >
              <Image source={{ uri: item.image }} style={styles.img} />
            </TouchableOpacity>
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
        keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: "white",
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
});
