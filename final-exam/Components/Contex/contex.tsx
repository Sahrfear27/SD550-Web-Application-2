import { Dispatch, createContext } from "react";
import { User, CoursesType } from "../../types";

// type ContexType = {
//   // student: User[];
//   // setStudent: (newStudent: User[]) => void;
//   logIn: boolean;
//   setLogIn: (login: boolean) => void;
//   course: CoursesType[];
//   setCourse: (newCourse: CoursesType[]) => void;
// };
// const GlobalContex = createContext<ContexType>({
//   // student: [],
//   // setStudent: () => {},
//   logIn: false,
//   setLogIn: () => {},
//   course: [],
//   setCourse: () => {},
// });
// export default GlobalContex;

// Initial State
const initialState = {
  logIn: false,
  course: [],
};
// State Type
type StateType = {
  logIn?: boolean;
  course?: CoursesType[];
};

type ActionType = {
  type: string;
  data: StateType;
};

type ContexType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

const GlobalContex = createContext<ContexType>({
  state: initialState,
  dispatch: () => {},
});
export default GlobalContex;
