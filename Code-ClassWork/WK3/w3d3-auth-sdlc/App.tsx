import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY, TokenProductType } from "./Types/types";
import ProductList from "./Components/ProductList";
import GlobalContex from "./Contex/Contex";

// If they are not authen, show login
// After successiful login, show product list
export default function App() {
  const [state, setState] = useState<TokenProductType>({
    token: "",
    product: [],
  });

  useEffect(() => {
    async function loadData() {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data !== null) {
          setState({ ...state, token: data });
          // console.log(state.token);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);
  return (
    <GlobalContex.Provider value={{ state, setState }}>
      <View style={styles.container}>
        {state.token ? <ProductList /> : <Login />}
      </View>
    </GlobalContex.Provider>
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
