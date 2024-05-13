import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./Styles/textInput";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.text}
        placeholder="e.g. John Doe"
        onChangeText={(value) => setName(value)}
      />
      <Text>Age</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.text}
        placeholder="e.g.20"
        onChangeText={(value) => setAge(parseInt(value))}
      />
      <Text>Full Name: {name}</Text>
      <Text>Age:{age}</Text>
    </View>
  );
}
