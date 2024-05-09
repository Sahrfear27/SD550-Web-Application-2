import {
  Button,
  MouseEvent,
  Pressable,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import styles from "./Styles/styleCounter";
import { useState } from "react";

export default function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [count, setCount] = useState(0);
  const handleToggle = () => {
    setShowCounter(!showCounter);
  };
  const handleCount = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <View style={styles.container}>
      <Button title="Toggle" onPress={handleToggle} />
      {showCounter && (
        // <Button onPress={handleCount} title={`Count:${count}`} color="blue" />
        // <Pressable onPress={handleCount} style={styles.counterStyle}>
        //   <Text>Count:{count}</Text>
        // </Pressable>
        <TouchableHighlight onPress={handleCount}>
          <Text>Count: {count}</Text>
        </TouchableHighlight>
      )}
    </View>
  );
}
