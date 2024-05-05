import { createContext } from "react";

type ContexType = {
  state: number;
  setState: (num: number) => void;
};
const GlobalContex = createContext<ContexType>({
  state: 0,
  setState: () => {},
});
export default GlobalContex;
