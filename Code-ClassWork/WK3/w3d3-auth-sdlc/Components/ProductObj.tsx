import React from "react";
import { View, Text } from "react-native";
import { ProductType } from "../Types/types";

type Props = {
  data: ProductType;
};
export default function ProductObj({ data }: Props) {
  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.price}</Text>
    </View>
  );
}
