import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

export default function MusicAudio() {
  const [sound, setSound] = useState<any>();

  const playSound = async () => {
    try {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/drake.mp3")
      );
      setSound(sound);
      console.log("Playing sound");
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecfof1",
    padding: 10,
  },
});
