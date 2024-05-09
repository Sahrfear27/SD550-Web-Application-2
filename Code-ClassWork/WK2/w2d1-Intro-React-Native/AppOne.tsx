import { Text, View } from "react-native";
import styles from "./Styles/style";
import { useState } from "react";
/*
<Text> is a block element
*/
export default function App() {
  const [message, setMessage] = useState(
    "This is my first mobile React Application"
  );
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        <Text style={{ fontSize: 26, color: "blue" }}>
          Hello from React Native!
        </Text>
        <Text style={{ color: "green" }}>Hello </Text>
      </Text>
      <Text style={styles.subText}>{message}</Text>
    </View>
  );
}
