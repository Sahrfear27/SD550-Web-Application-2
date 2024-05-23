import React, { useContext, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import GlobalContex from "./Contex";
import axios from "axios";
import ProductObj from "./ProductObj";
import { getAllProducts } from "./Api/services";

export default function ProductList() {
  const { state, setState } = useContext(GlobalContex);
  // Load Product
  async function loadProducts() {
    try {
      // axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
      // const response = await axios.get(
      //   "http://localhost:6000/users/login/products"
      // );
      const data = await getAllProducts(state.token);
      if (data) {
        setState({ ...state, product: data });
      }
    } catch (error) {
      Alert.alert("Fail to load Product");
    }
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <View>
      <Text>Product List</Text>
      {state.product.map((products) => (
        <ProductObj data={products} />
      ))}
    </View>
  );
}
