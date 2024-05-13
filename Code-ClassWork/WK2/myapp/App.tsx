import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Settings from "./Settings";

const { Navigator, Screen } = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              // The name of the iocn is home
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Screen
          name="Setting"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
