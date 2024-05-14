import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/styles";
import React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Createating a composing navigator to multiple screens
type Props = {
  navigation: any;
};

const { Navigator, Screen } = createNativeStackNavigator();
export default function Home(props: Props) {
  const { navigation } = props;
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate("About", {
            dataArray: ["Items", "Quantity"],
            dataObj: { first: "Sahrfear", last: "Macarthy" },
          })
        }
      />
    </View>
  );
}

// <Navigator>
// {/* <Screen name="" /> */}
// </Navigator>
