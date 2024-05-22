import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import GlobalContex from "../Contex/contex";
import styles from "../../styles";
import CourseObject from "./CourseObject";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CourseStackParamList, CoursesType } from "../../types";
import axios from "axios";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
type CoursePros = StackNavigationProp<CourseStackParamList, "add">;
export default function CourseList() {
  const { course, setLogIn, setCourse } = useContext(GlobalContex);
  const [displayData, setDisplayData] = useState(course);
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation<any>();
  useEffect(() => {
    setDisplayData(course);
  }, [course]);

  const handleLogOut = () => {
    try {
      AsyncStorage.removeItem("user");
      setLogIn(false);
    } catch (error) {
      Alert.alert("Try again");
    }
  };

  const handleSearch = (text: string) => {
    setInputValue(text);
    const matchingElement = course.filter((courses) => {
      return courses.title.toLowerCase().startsWith(text.trim().toLowerCase());
    });
    setDisplayData(matchingElement);
  };
  const handleAdd = async () => {
    navigation.navigate("add");
  };
  return (
    <SafeAreaView>
      <Button title="logOut" onPress={handleLogOut} />
      <Text style={styles.headerText}>Course List</Text>
      <TextInput
        placeholder="Search"
        style={styles.search}
        onChangeText={handleSearch}
        value={inputValue}
      />
      <TouchableHighlight onPress={handleAdd} style={[styles.button]}>
        <Text style={styles.buttonText}>Add Course</Text>
      </TouchableHighlight>
      <FlatList
        data={displayData}
        renderItem={({ item, index }) => (
          <CourseObject data={item} index={index} />
        )}
        keyExtractor={(data, index) => (data.id ? data.id : index.toString())}
      />
    </SafeAreaView>
  );
}
