import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TokeyType } from "./Types";
import ProductList from "./ProductList";
import LogIn from "./LogIn";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [state, setState] = useState<TokeyType>({
    token: "",
    product: [],
  });

  // load the data in app
  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("mykey");
      console.log(data);
      if (data !== null) {
        setState({ ...state, token: data });
      }
      // AsyncStorage.removeItem("mykey");
      // setState({ ...state, token: "" });
    } catch (error) {
      Alert.alert("Fail");
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.container}>
      {state.token ? <ProductList /> : <LogIn />}
    </View>
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
