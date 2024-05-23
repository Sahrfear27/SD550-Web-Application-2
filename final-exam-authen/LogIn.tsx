import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableHighlight, View } from "react-native";
import GlobalContex from "./Contex";

export default function LogIn() {
  const { state, setState } = useContext(GlobalContex);
  const [email, setEmail] = useState("");
  const handleLogIn = async () => {
    try {
      if (email.trim() == "") {
        Alert.alert("Email cannot be empty");
      }

      const response = await axios.post("http://localhost:6000/users/login", {
        email,
      });

      if (response.status == 200 && response.data.success) {
        const token = response.data.data;
        // console.log(token);
        AsyncStorage.setItem("mykey", token);
        setState({ ...state, token });
        Alert.alert("LogIn Successful");
      } else {
        Alert.alert("Email is Incorrect");
      }
    } catch (error) {}
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Please LogIn</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        style={{
          marginTop: 20,
          width: 200,
          borderWidth: 1,
          height: 50,
          borderRadius: 10,
          padding: 10,
        }}
      />
      <TouchableHighlight
        onPress={handleLogIn}
        style={{ borderWidth: 1, marginTop: 20, padding: 10, borderRadius: 10 }}
      >
        <Text>LogIn</Text>
      </TouchableHighlight>
    </View>
  );
}
