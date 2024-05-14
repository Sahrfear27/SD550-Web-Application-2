import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
/*
 All hard ware task whould be async
 Note: If you want something to happen once during mounting time, use useEffect
 The coordinate is base on the latitude  and the longitude

Note: To create a google map, you need to update a coordinate everyseconds

MapOverlay:
*/

export default function LocationDemo() {
  const [status, setStatus] = useState<string>();
  const [coordinates, setCoordinate] = useState<any>(null);
  //
  useEffect(() => {
    async function getPermission() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        setStatus(status);
        if (status === "granted") {
          // Get the current position
          const currentLocation = await Location.getCurrentPositionAsync();
          setCoordinate(currentLocation.coords);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getPermission();
  }, []);
  if (!coordinates) {
    return <ActivityIndicator size={"small"} color={""} />;
  }
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.01, //approximation of coordinate
        longitudeDelta: 0.01,
      }}
    >
      <Marker draggable pinColor="blue" coordinate={coordinates} />
      {/* <Marker draggable pinColor="blue" coordinate={coordinates}>
        <View style={styles.overLayContainer}>
          <Text style={{ color: "blue", fontWeight: "bold" }}>MIU</Text>
        </View>
      </Marker> */}
    </MapView>
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
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    margin: 20,
    alignItems: "center",
  },
});
