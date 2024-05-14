import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Brightness from "expo-brightness";
export default function Brigntness() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      console.log(status);
      if (status === "granted") {
        Brightness.setSystemBrightnessAsync(0);
      }
    })();
  }, []);
  return (
    <View style={styyles.container}>
      <Text>Brightness Example</Text>
    </View>
  );
}
const styyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
