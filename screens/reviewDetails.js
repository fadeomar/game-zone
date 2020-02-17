import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globleStyle } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globleStyle.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}
