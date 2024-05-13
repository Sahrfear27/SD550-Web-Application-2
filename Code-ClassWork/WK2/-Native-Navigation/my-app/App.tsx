import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductList from "./Components/ProductList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDrawer from "./Components/HomeDrawer";
import SignUp from "./Components/Sign Up";
import Login from "./Components/Login";

// Create a native stack navigator
/*

*/
const { Navigator, Screen } = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeDrawer} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}
import React from "react";
import { View } from "react-native";

// export default function App() {
//   return <View>App</View>;
// }
