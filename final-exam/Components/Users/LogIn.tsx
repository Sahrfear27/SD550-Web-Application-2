import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "../../styles";
import axios from "axios";
import { User } from "../../types";
import SignUp from "./SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Props = {
  setLogIn: (logIn: boolean) => void;
};

export default function LogIn({ setLogIn }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signUp, setSignUp] = useState(false);

  const handleLogIn = async () => {
    try {
      if (name.trim() == "" || email.trim() == "") {
        return Alert.alert("Input cannot be empty");
      }
      const response = await axios.get(
        `http://localhost:9000/users?email=${email}&name=${name}`
      );
      if (response.status === 200 && response.data.length > 0) {
        const user: { email: string; name: string } = response.data.find(
          (users: { email: string; name: string }) =>
            users.email == email && users.name == name
        );

        if (user) {
          AsyncStorage.setItem("user", JSON.stringify({ logIn: true }));
          setEmail("");
          setName("");
          setLogIn(true);
          Alert.alert("Sign In Successfully");
        } else {
          Alert.alert("Incorrect Email or Name");
        }
      }
    } catch (error) {
      Alert.alert("An error occurred. Please try again.");
    }
  };
  const handleSignUp = () => {
    setSignUp(true);
  };
  if (signUp) {
    return <SignUp setSignUp={setSignUp} />;
  }
  return (
    <View style={style.container}>
      <Text style={styles.headerText}>Please Log In or Sign Up</Text>
      <View>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="name"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
          autoCapitalize="none"
          style={styles.input}
        />
        <View style={{ flexDirection: "row" }}>
          <Button title="New Member?" onPress={handleSignUp} />
        </View>
        <Button title="logIn" onPress={handleLogIn} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
