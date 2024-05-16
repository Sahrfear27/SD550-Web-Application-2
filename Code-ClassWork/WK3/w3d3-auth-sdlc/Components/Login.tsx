import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../Types/types";

// Not auth path
import { login } from "../API/Services/details.services";
import GlobalContex from "../Contex/Contex";
// thaovu@miu.edu
export default function Login() {
  const [email, setEmail] = useState("");
  const { state, setState } = useContext(GlobalContex);
  const handleLogIn = async () => {
    try {
      if (email == "") {
        Alert.alert("Please Enter Email");
      }

      const token = await login(email);

      if (token == null) {
        Alert.alert("Wrong Email");
      } else {
        AsyncStorage.setItem(STORAGE_KEY, token);
        setState({ ...state, token });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <Button onPress={handleLogIn} title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    padding: 10,
    width: 200,
  },
});
