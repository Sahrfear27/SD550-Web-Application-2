import { Text, View } from "react-native";
import styles from "./Styles/styleLength";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.constainer}>
      <View style={styles.greenBox}></View>
      <View style={styles.whiteBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  );
}
