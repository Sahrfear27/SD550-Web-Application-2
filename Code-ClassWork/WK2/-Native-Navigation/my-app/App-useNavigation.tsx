import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Components/Home";
import ProductList from "./Components/ProductList";

// Create a native stack navigator
/*

*/
const { Navigator, Screen } = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        {/* <Screen name="Home" component={Home} /> */}
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="product-list"
          component={ProductList}
          options={{ title: "Products", headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
