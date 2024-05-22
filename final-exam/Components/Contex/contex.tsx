import { createContext } from "react";
import { User, CoursesType } from "../../types";

type ContexType = {
  // student: User[];
  // setStudent: (newStudent: User[]) => void;
  logIn: boolean;
  setLogIn: (login: boolean) => void;
  course: CoursesType[];
  setCourse: (newCourse: CoursesType[]) => void;
};
const GlobalContex = createContext<ContexType>({
  // student: [],
  // setStudent: () => {},
  logIn: false,
  setLogIn: () => {},
  course: [],
  setCourse: () => {},
});
export default GlobalContex;
