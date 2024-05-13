import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const [state, setState] = useState({ name: "", email: "" });
  const handleSubmit = () => {
    if (state.name.trim() == "") {
      return alert("Please Enter your name");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          // onChangeText={(text: string) => setValue(text)}
          onChangeText={(text: string) => setState({ ...state, name: text })}
          // value={value}
          value={state.name}
          // placeholder="Enter Value"
          placeholder="Enter name"
        />

        <TextInput
          style={styles.input}
          // onChangeText={(text: string) => setValue(text)}
          onChangeText={(text: string) => setState({ ...state, email: text })}
          // value={value}
          value={state.email}
          // placeholder="Enter Value"
          placeholder="Enter Email"
        />

        {/* <Text>OutPut:{value}</Text> */}
        <Button title="Submit" onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    width: 200,
    fontSize: 20,
    padding: 10,
  },
});
