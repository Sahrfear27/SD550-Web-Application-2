import React from "react";
import { Text, View } from "react-native";
import { ProductType } from "./Types";

type Props = {
  data: ProductType;
};
export default function ProductObj({ data }: Props) {
  console.log(data);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
