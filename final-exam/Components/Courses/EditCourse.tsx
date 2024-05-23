import React, { useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableHighlight, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { CourseStackParamList } from "../../types";
import styles from "../../styles";
import GlobalContex from "../Contex/contex";
import axios from "axios";

type EditRouteProps = RouteProp<CourseStackParamList, "edit">;

export default function EditCourse() {
  // const { course, setCourse } = useContext(GlobalContex);
  const { state, dispatch } = useContext(GlobalContex);
  const route = useRoute<EditRouteProps>();
  const { data } = route.params;
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(data);
  // console.log(data);
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:9000/courses/${data.id}`,
        inputValue
      );
      if (response.status == 200) {
        const courseIndex = state.course!.findIndex(
          (courses) => courses.id == inputValue.id
        );
        if (courseIndex !== -1) {
          state.course![courseIndex] = inputValue;
        }
        // setCourse([...course]);
        dispatch({ type: "course", data: { course: state.course } });
        Alert.alert("Update Successful");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert("Update Fail");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Edit</Text>
      <TextInput
        placeholder="title"
        value={inputValue.title}
        onChangeText={(text: string) =>
          setInputValue({ ...inputValue, title: text })
        }
        style={styles.search}
      />
      <TextInput
        placeholder="Faculty"
        value={inputValue.faculty}
        onChangeText={(text: string) =>
          setInputValue({ ...inputValue, faculty: text })
        }
        style={styles.search}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableHighlight
          onPress={handleUpdate}
          style={[
            styles.button,
            {
              width: 100,
              marginTop: 20,
            },
          ]}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
