import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Home from "./screens/Home";
import { AppLoading } from "expo";

const getFont = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setFonts] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return <AppLoading startAsync={getFont} onFinish={() => setFonts(true)} />;
  }
}

const styles = StyleSheet.create({});
