import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, StyleSheet, Text, View } from "react-native";

/*
Image picker is an async operations
photo is an object in memory, the object has reference to where the pic is temporary saved photo.uri
*/
export default function ImagePickers() {
  const [status, setStatus] = useState<string>();
  const [image, setImage] = useState<string>();
  useEffect(() => {
    async function getPermission() {
      try {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status == "granted") {
          setStatus(status);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPermission();
  });
  const pickImage = async () => {
    try {
      const photo = await ImagePicker.launchImageLibraryAsync();
      if (!photo.canceled) {
        setImage(photo.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Image Picker</Text>
      <Text>Status:{status}</Text>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.img} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
});
