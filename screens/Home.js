import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.titleText}>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18
  }
});

export default Home;
