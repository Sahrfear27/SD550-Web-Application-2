import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LocationDemo from "./Location";
import ImagePickers from "./ImagePicker";
import CameraDemo from "./CameraDemo";
import MusicAudio from "./Audio";
import { BrightnessMode } from "expo-brightness";
import Brigntness from "./Brigntness";
import SendNotification from "./SendNotification";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LocationDemo /> */}
      {/* <ImagePickers /> */}
      {/* <CameraDemo /> */}
      {/* <MusicAudio /> */}
      <Brigntness />
      <SendNotification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
