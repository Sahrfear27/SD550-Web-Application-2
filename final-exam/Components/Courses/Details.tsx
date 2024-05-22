import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { CourseStackParamList } from "../../types";
import styles from "../../styles";

type DetailsRouteProps = RouteProp<CourseStackParamList, "details">;
export default function Details() {
  const route = useRoute<DetailsRouteProps>();
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Course Details</Text>

      <Text style={{ fontSize: 20 }}>Title: {data.title}</Text>
      <Text style={styles.faculty}>Faculty: {data.faculty}</Text>
      <Text>Course Code: {data.code}</Text>
      <Text>Rating: {data.rating}</Text>

      <Text>
        {data.reviews?.map((reviews) => (
          <View>
            <Text>Reviews:</Text>
            <Text>Name: {reviews.name}</Text>
            <Text>Comment: {reviews.comment}</Text>
            <Text>Rating: {reviews.rating}</Text>
          </View>
        ))}
      </Text>
    </View>
  );
}
