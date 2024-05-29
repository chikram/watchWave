import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Start = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.txtView}>
        <Text style={styles.txt1}>Easy way to buy your dream watch</Text>
        <Text style={styles.text2}>
          Wearing a watch enhances your daily life by providing a convenient and
          efficient way to keep track of time, allowing you to stay punctual and
          organized as you move through your day.
        </Text>
      </View>
      <View style={styles.itemcontainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1612771409641-b0478cab8b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        style={styles.touchAble}
        onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  txtView: {
    margin: 10,
    marginTop: 0,
  },
  txt1: {
    color: "white",
    fontSize: 34,
    marginTop: 35,
  },
  text2: {
    color: "gray",
    marginTop: 10,
  },
  image: {
    width: "110%",
    aspectRatio: 1,
  },
  itemcontainer: {
    width: "110%",
    padding: 1,
  },
  touchAble: {
    marginTop: 40,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
});
