import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, SafeAreaView, TextInput, View } from "react-native";
import { User } from "../../types";

type Props = {
  setSignUp: (signUp: boolean) => void;
};
export default function SignUp({ setSignUp }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleSignUp = async () => {
    try {
      const newUser = {
        name: name,
        email: email,
      };
      if (name.trim() == "" || email.trim() == "") {
        Alert.alert("Input cannot be empty");
      } else if (!isValidEmail(email)) {
        return Alert.alert("Invalid Email");
      } else {
        //get useer information
        const response = await axios.get(`http://localhost:9000/users`);

        const existingUser: User = response.data.find(
          (users: User) => users.email == email
        );

        if (!existingUser) {
          const response = await axios.post(
            "http://localhost:9000/users",
            newUser
          );
          if (response.status == 201) {
            setEmail("");
            setName("");
            Alert.alert("SignUp Successful");
            setSignUp(false);
          }
        } else {
          Alert.alert("Email already exist");
        }
      }
    } catch (error) {
      Alert.alert("SignUp fail");
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          padding: 30,
          height: 300,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 15,
          borderBlockEndColor: "blue",
        }}
      >
        <View>
          <TextInput
            placeholder="name"
            value={name}
            onChangeText={(text: string) => setName(text)}
            style={{
              borderWidth: 1,
              width: 200,
              padding: 10,
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              width: 200,
              padding: 10,
              borderRadius: 15,
              marginTop: 10,
            }}
          />
        </View>

        <Button title="SignUp" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
}
