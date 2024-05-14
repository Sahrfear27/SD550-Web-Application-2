import React, { useEffect, useRef, useState } from "react";
import { CameraView } from "expo-camera";
import { useCameraPermissions } from "expo-camera";
import * as MediaLib from "expo-media-library";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  View,
} from "react-native";
/*
photo is an object in memory, the object has reference to where the pic is temporary saved photo.uri
It has an hook called useCameraPermission: This hook will return the result persmission as a data

To Save image to your library, you can use midia library
*/

export default function CameraDemo() {
  const [toggle, setTogggle] = useState<any>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState();

  // You need to reference to capture the camera
  const cameraRef = useRef<any>();
  useEffect(() => {
    async function getPermission() {
      try {
        const { status } = await MediaLib.requestPermissionsAsync();
      } catch (error) {
        console.log(error);
      }
    }
    getPermission();
  }, []);

  //   If permission is not there return activitiy indicator: camera is not ready
  if (!permission) {
    return <ActivityIndicator size={"large"} />;
  }

  //   If permission is there and it is not rendered, show request permission
  if (!permission.granted) {
    return <Button title="Request permission" onPress={requestPermission} />;
  }

  const onCapture = async () => {
    try {
      const photo = await cameraRef.current.takePictureAsync(); // This will return a photo
      await MediaLib.saveToLibraryAsync(photo.uri); //Save to library
      setImage(photo.uri);
    } catch (error) {}
  };
  return (
    <CameraView style={styles.container} facing={toggle} ref={cameraRef}>
      <View style={styles.overLayContainer}>
        {/* Rotate the camera */}
        <Button
          title="Toggle Camera"
          onPress={() => setTogggle(toggle === "back" ? "front" : "back")}
        />
        {/* Take Picture */}
        <Button title="Capture" onPress={onCapture} />
      </View>
      {image && <Image source={{ uri: image }} style={styles.img} />}
    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overLayContainer: {
    flex: 1,
    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
});
