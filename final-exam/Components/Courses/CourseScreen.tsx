import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import CourseList from "./CourseList";
import EditCourse from "./EditCourse";
import { CourseStackParamList } from "../../types";
import Details from "./Details";
import AddCourse from "./AddCourse";

const { Navigator, Screen } =
  createNativeStackNavigator<CourseStackParamList>();
export default function CourseScreen() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="courses" component={CourseList} />
      <Screen
        name="edit"
        component={EditCourse}
        options={{ headerShown: true }}
      />

      <Screen
        name="details"
        component={Details}
        options={{ headerShown: true }}
      />
      <Screen
        name="add"
        component={AddCourse}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
}
