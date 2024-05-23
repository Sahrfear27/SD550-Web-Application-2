import React, { useContext } from "react";
import { Alert, Pressable, Text, TouchableHighlight, View } from "react-native";
import { CourseStackParamList, CoursesType } from "../../types";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import GlobalContex from "../Contex/contex";

type Props = {
  data: CoursesType;
  index: number;
};
type CourseObjectNavigationProp = StackNavigationProp<
  CourseStackParamList,
  "edit"
>;
export default function CourseObject({ data, index }: Props) {
  // const { course, setCourse } = useContext(GlobalContex);
  const { state, dispatch } = useContext(GlobalContex);
  const navigation = useNavigation<CourseObjectNavigationProp>();
  const handleEdit = () => {
    navigation.navigate("edit", { data: data });
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/courses/${data.id}`
      );

      if (response.status == 200) {
        const matchingElement = state.course!.filter(
          (existingCourses) => existingCourses.id !== data.id
        );
        // setCourse(matchingElement);
        dispatch({ type: "course", data: { course: matchingElement } });
        Alert.alert("Delete Successful");
      }
    } catch (error) {
      Alert.alert("Fail");
    }
  };
  return (
    <View
      style={{
        backgroundColor: index % 2 == 0 ? "#FFFFFF" : "#f0f9ff",
      }}
    >
      <View style={styles.row}>
        <View style={styles.course}>
          <Text>Title: {data.title}</Text>
          <Text>Faculty: {data.faculty}</Text>
          <Text style={styles.stars}>{data.rating}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            height: 100,
            justifyContent: "space-between",
          }}
        >
          <Pressable style={styles.button} onPress={handleEdit}>
            <Text>Edit</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleDelete}>
            <Text>Delete</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("details", { data })}
          >
            <Text>Detail</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
