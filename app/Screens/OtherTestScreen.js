import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Alert,
  Button,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

// const image = { uri: "https://www.enjpg.com/img/2020/4k-mobile-7.jpg" };
const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

function OtherTestScreen(props) {
  return (
    <ImageBackground source={image} style={styles.background}>
        
      <Image
        style={styles.image}
        source={{uri:"https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg",}}
      />

      <Text style={styles.text}>This is my first react app!</Text>

      <View style={styles.loginButton} />

      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "purple",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "gray",
  },

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 85,
  },

  image: {
    width: 200,
    height: 300,
    position: "absolute",
    top: 225,
  },

  text2: {
    color: "white",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",

    backgroundColor: "#000000a0",
  },
});

export default OtherTestScreen;
