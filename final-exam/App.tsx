import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useReducer, useState } from "react";
import LogIn from "./Components/Users/LogIn";
import CourseScreen from "./Components/Courses/CourseScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./Components/About/About";
import { CoursesType, User } from "./types";
import GlobalContex from "./Components/Contex/contex";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { Navigator, Screen } = createBottomTabNavigator();

// Using reducer

// Initial State
const initialState = {
  course: [],
  logIn: false,
};
// State type
type StateType = {
  course?: CoursesType[];
  logIn?: boolean;
};

// ActionType
type ActionType = {
  type: string;
  data: StateType;
};
// Reducer Function
function reducer(state: StateType, action: ActionType) {
  const { type, data } = action;
  switch (type) {
    case "course":
      return { ...state, course: data.course };
    case "logIn":
      return { ...state, logIn: data.logIn };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { logIn } = state;

  async function loadCourse() {
    try {
      const response = await axios.get("http://localhost:9000/courses");
      if (response.status == 200) {
        dispatch({ type: "course", data: { course: response.data } });
      }
      const logInUser = await AsyncStorage.getItem("user");
      if (logInUser) {
        const resut = JSON.parse(logInUser); //Object

        dispatch({ type: "logIn", data: { logIn: resut.logIn } });
      }
    } catch (error) {
      Alert.alert("Fail to load Courses");
    }
  }
  useEffect(() => {
    loadCourse();
  }, []);
  if (!logIn) {
    return (
      <LogIn
        setLogIn={(status) =>
          dispatch({ type: "logIn", data: { logIn: status } })
        }
      />
    );
  }
  return (
    <GlobalContex.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: true }}
        >
          <Screen name="Home" component={CourseScreen} />
          <Screen name="About" component={About} />
        </Navigator>
      </NavigationContainer>
    </GlobalContex.Provider>
  );
}
