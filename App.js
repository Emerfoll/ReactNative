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

const image = { uri: "https://www.enjpg.com/img/2020/4k-mobile-7.jpg" };
// const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

export default function App() {
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <View
          style={{
            // backgroundColor: 'purple',
            // width: "75%",
            flex: .3,
            alignItems: 'center',
            marginHorizontal: landscape ? 100 : 55,
          }}
        >
          <Text style={styles.text}>My first React Native app!</Text>
          <StatusBar style="auto" />

          {/* <Image 
              source={{ 
                width: 200,
                height: 300,
                uri: "https://i.picsum.photos/id/397/200/300.jpg?hmac=9VBInLrifj_yyc2JuJSAVIfj9yQdt5Ovm2sHmvva-48"}} 
              /> */}

          <Text
            style={styles.text2}
            onPress={() => console.log("name clicked")}
          >
            By: Chris Emerfoll
          </Text>

          <View style={styles.button}>
            <Button
              title="View Portfolio"
              onPress={() =>
                Alert.alert("Title", "Alert Message", [
                  { text: "yes", onPress: () => console.log("yes clicked") },
                  { text: "no", onPress: () => console.log("no clicked") },
                ])
              }
              accessibilityLabel="Blue View Portfolio Button"
            />
          </View>
        </View>
      </ImageBackground>
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
});
