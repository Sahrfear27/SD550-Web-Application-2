import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
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
export default function App() {
  const [course, setCourse] = useState<CoursesType[]>([]);
  const [logIn, setLogIn] = useState<boolean>(false);

  async function loadCourse() {
    try {
      const response = await axios.get("http://localhost:9000/courses");
      if (response.status == 200) {
        setCourse(response.data);
      }
      const logInUser = await AsyncStorage.getItem("user");
      if (logInUser) {
        const resut = JSON.parse(logInUser); //Object
        setLogIn(resut.logIn);
      }
    } catch (error) {
      Alert.alert("Fail to load Courses");
    }
  }
  useEffect(() => {
    loadCourse();
  }, []);
  if (!logIn) {
    return <LogIn setLogIn={setLogIn} />;
  }
  return (
    <GlobalContex.Provider value={{ course, setCourse, setLogIn, logIn }}>
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
