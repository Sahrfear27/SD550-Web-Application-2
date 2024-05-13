import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

// To move from home to product list
/*
Since Home is a screen, it has two property. It should be a screen before it has navigation and route
1. navigation
2.routes
*/

/*
Sending Data Between components
*/
type Props = {
  navigation: any;
  route: any;
};
export default function Home(props: Props) {
  const { navigation } = props;
  const goToProduct = () => {
    navigation.navigate("product-list", {
      product1: "Apple",
      product2: "Orange",
      product3: "Banana",
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to Home Page: Go to product</Text>
        <Button title="product" onPress={goToProduct} />
      </View>
    </SafeAreaView>
  );
}
