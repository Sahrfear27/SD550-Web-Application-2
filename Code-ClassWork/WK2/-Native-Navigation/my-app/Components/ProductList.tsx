import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import SearchBar from "./SearchBar";

type Props = {
  navigation: any;
  route: any;
};

/*
To Receive a data from another Screen, you use params. The params will contain the route objects
*/

/*
If we want to go to another component from productList example searchBar which is not a screen
*/
export default function ProductList(props: Props) {
  const { navigation, route } = props;
  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      {/* <Button title="Home" onPress={goToHome} /> */}

      <SearchBar />

      <Text>Product List</Text>
      <Text>{route.params.product1}</Text>
      <Text>{route.params.product2}</Text>
      <Text>{route.params.product3}</Text>
    </SafeAreaView>
  );
}
