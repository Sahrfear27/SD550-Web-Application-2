import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./Styles/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const { Navigator, Screen } = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Screen name="Contact" component={Contact} />
        <Screen name="About" component={About} options={{ title: "About" }} />
      </Navigator>
    </NavigationContainer>
  );
}
