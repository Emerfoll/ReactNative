import React from "react";
import { StatusBar } from "expo-status-bar";
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

function WelcomeScreen({ navigation }) {
    // used to detect if the screen is in portrait or landscape mode
  const { landscape } = useDeviceOrientation();

  const sendToOtherScreen = () => {
    console.log(
      "Clicking this button will route the user to 'otherTestScreen'"
    );
    // navigates the the "otherTestScreen"
    navigation.navigate("Other");
  };

  return (
    <ImageBackground source={image} style={styles.background}>
      <View
        // styling for the button position
        style={{
          width: 75,
          left: 50,
          top: 50,
          position: "absolute",
        }}
      >
        <Button
          title="Go To Other Page."
          onPress={() => sendToOtherScreen()}
          accessibilityLabel="Button to go to 'other page'"
        />
      </View>

      <View
        // place holder for a button
        style={{
          height: 75,
          width: 75,
          right: 50,
          top: 50,
          position: "absolute",
          backgroundColor: "gray",
        }}
      />

      <View
        style={{
          alignItems: "center",
          marginHorizontal: landscape ? 100 : 55,
        }}
      >
        <Text style={styles.text}>My first React Native app!</Text>
        {/* <StatusBar style="auto" /> */}

        <Text style={styles.text2} onPress={() => console.log("name clicked")}>
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
  );
}

const styles = StyleSheet.create({
  // style for the container
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gray",
    // alignItems: 'center',
    justifyContent: "center",
  },
  // styling for the button
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
  },
  text2: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  image: {
    marginBottom: 15,
  },
});

export default WelcomeScreen;
