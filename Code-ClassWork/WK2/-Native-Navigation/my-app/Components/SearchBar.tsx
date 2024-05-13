import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

// Search is a component inside productlist

export default function SearchBar() {
  const navigation = useNavigation<any>();
  // You can also use the search params here
  const route = useRoute();
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Text>Search Bar Page</Text>;
      <Button title="Home" onPress={goToHome} />
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
}
