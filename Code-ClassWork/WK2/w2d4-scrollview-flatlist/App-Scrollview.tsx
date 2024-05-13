import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import styles from "./Styles/scrollView";
import { useState } from "react";
export default function App() {
  const [people, setPeople] = useState([
    { firstname: "Alves", lastname: "Macarthy", id: 1 },
    { firstname: "John", lastname: "Smith", id: 2 },
    { firstname: "Kai", lastname: "Vixon", id: 3 },
    { firstname: "Ramond", lastname: "Mession", id: 4 },
    { firstname: "Mary", lastname: "Jane", id: 5 },
    { firstname: "Sahr", lastname: "Macarthy", id: 6 },
    { firstname: "Kumba", lastname: "Macarthy", id: 7 },
    { firstname: "Sia", lastname: "Macarthy", id: 8 },
    { firstname: "Finda", lastname: "Macarthy", id: 9 },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((people) => (
          <View key={people.id}>
            <Text style={styles.items}>
              {people.firstname} {people.lastname}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
