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
      <View
        style={{
          height: 75,
          width: 75,
          left: 50,
          bottom: 700,
          position: "absolute",
          backgroundColor: "purple",
        }}
      />

      <View
        style={{
          height: 75,
          width: 75,
          right: 50,
          bottom: 700,
          position: "absolute",
          backgroundColor: "gray",
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gray",
    // alignItems: 'center',
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 11,
    // backgroundColor: "#000000a0"
  },
  text2: {
    color: "white",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",

    backgroundColor: "#000000a0",
  },
  image: {
    marginBottom: 15,
  },
    });

export default OtherTestScreen;
