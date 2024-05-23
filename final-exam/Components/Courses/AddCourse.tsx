import React, { useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableHighlight, View } from "react-native";
import styles from "../../styles";
import axios from "axios";
import GlobalContex from "../Contex/contex";

export default function AddCourse() {
  // const { course, setCourse } = useContext(GlobalContex);
  const { state, dispatch } = useContext(GlobalContex);
  const [title, setTitle] = useState("");
  const [faculty, setFaculty] = useState("");
  const [rating, setRating] = useState("");
  const [code, setCode] = useState("");
  const handleAdd = async () => {
    try {
      const newCourse = {
        title: title,
        faculty: faculty,
        rating: rating,
        code: code,
      };
      if (
        !(
          title.trim() == "" ||
          faculty.trim() == "" ||
          rating.trim() == "" ||
          code.trim() == ""
        )
      ) {
        const response = await axios.post(
          "http://localhost:9000/courses",
          newCourse
        );
        if (response.status == 201) {
          const updatedCourse = [...state.course!, response.data];
          dispatch({ type: "course", data: { course: updatedCourse } });
          Alert.alert("Add Successful");
        }
      } else {
        Alert.alert("Please Enter Input");
      }
    } catch (error) {
      Alert.alert("Fail");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add New Course</Text>
      <TextInput
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        placeholder="Faculty"
        onChangeText={(text: string) => setFaculty(text)}
        value={faculty}
        style={styles.input}
      />
      <TextInput
        value={rating}
        onChangeText={(text: string) => setRating(text)}
        placeholder="Rating"
        style={styles.input}
      />
      <TextInput
        placeholder="Code"
        value={code}
        style={styles.input}
        onChangeText={(text: string) => setCode(text)}
      />
      <TouchableHighlight style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
}
