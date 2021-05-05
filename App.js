import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from './app/Screens/WelcomeScreen';
import OtherTestScreen from './app/Screens/OtherTestScreen';
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

const image = { uri: "https://www.enjpg.com/img/2020/4k-mobile-7.jpg" };
// const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

export default function App() {
  
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* <WelcomeScreen/> */}

      <OtherTestScreen/>


    </SafeAreaView>
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
