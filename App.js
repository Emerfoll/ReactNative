import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';

const image = { uri: "https://wallpaperaccess.com/full/57166.jpg" };

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>My first React Native app!</Text>
      <StatusBar style="auto" />
      
      <Text style={styles.text2}>By: Chris Emerfoll</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  text2: {
    color: "white",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
