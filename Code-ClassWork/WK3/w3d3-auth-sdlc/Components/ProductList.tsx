import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { STORAGE_KEY } from "../Types/types";
import GlobalContex from "../Contex/Contex";
import { getAllProducts } from "../API/Services/details.services";
import ProductObj from "./ProductObj";

export default function ProductList() {
  // Send a get request to get the product
  const { state, setState } = useContext(GlobalContex);
  const handleLogOut = () => {
    try {
      // Once Logout is clicked, deleted the token
      AsyncStorage.removeItem(STORAGE_KEY);
      setState({ ...state, token: "" });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function getProducts() {
      try {
        const data = await getAllProducts(state.token);
        if (data) {
          setState({ ...state, product: data });
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {state.product.map((products) => (
          <ProductObj key={products.id} data={products} />
        ))}

        <Button onPress={handleLogOut} title="LogOut" />
      </ScrollView>
    </View>
  );
}
