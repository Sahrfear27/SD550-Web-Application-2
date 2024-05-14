import React from "react";
import { Button, Text, View } from "react-native";
import DetailScreen from "./DetailScreen";
type Prop = {
  route: any;
  navigation: any;
};
export default function Contact(props: Prop) {
  const { route, navigation } = props;
  console.log(route.params);
  return (
    <View>
      <Text>Contact</Text>
      <Text>{route.params.data.fullname}</Text>
      <Text>{route.params.data.phone}</Text>
      <Button onPress={() => navigation.goBack()} title="Previous Page" />
      <DetailScreen />
    </View>
  );
}
