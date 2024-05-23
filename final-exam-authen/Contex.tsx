import { createContext, useContext } from "react";
import { TokeyType, ProductType } from "./Types";
type ContexType = {
  state: TokeyType;
  setState: (state: TokeyType) => void;
};
const GlobalContex = createContext<ContexType>({
  state: { token: "", product: [] },
  setState: () => {},
});
export default GlobalContex;
