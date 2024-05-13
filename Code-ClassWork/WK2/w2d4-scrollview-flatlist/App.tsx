import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

function Poduct(data: any) {
  return (
    <View>
      <Image source={{ uri: data.image }} style={styles.image} />

      <Text style={styles.text}>{"$" + data.price}</Text>
      <Text style={styles.text}>{"$" + data.name}</Text>
    </View>
  );
}
import { useEffect, useState } from "react";
export default function App() {
  const [product, setProduct] = useState<any>([]);
  const [name, setName] = useState("");
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: i + 1,

        name: "name" + i,
        price: 100 + i,
        image: "https://picsum.photos/200/300",
      });
    }
    setProduct(arr);
  }, []);
  const onSave = () => {};
  return (
    <SafeAreaView style={styles.container}>
      {/* <ActivityIndicator size={"large"} /> */}
      <TextInput
        placeholder="nAME"
        value={name}
        onChangeText={(text: string) => setName(text)}
        placeholderTextColor={"Enter Name"}
      ></TextInput>
      <Button title="save" onPress={onSave}></Button>
      <ScrollView>
        {product.map((product: any) => (
          <Poduct key={product.id} {...product} />
        ))}
      </ScrollView>
      {/* <FlatList
        data={product}
        renderItem={({ items }: any) => <Poduct {...product} />}
        keyExtractor={(product: any) => product.id}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
  },
  text: {
    backgroundColor: "red",
    color: "white",
    fontSize: 20,
    margin: 10,
    padding: 20,
  },
});
