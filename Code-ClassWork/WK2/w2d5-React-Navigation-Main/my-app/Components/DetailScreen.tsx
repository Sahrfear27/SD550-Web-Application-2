import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

// If a component is not directely a part of the navigationContainer, use useNavigation Hook

export default function DetailScreen() {
  const navigation = useNavigation();
  const onGo = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      DetailScreen
      <Button title="Go" onPress={onGo} />
    </View>
  );
}
