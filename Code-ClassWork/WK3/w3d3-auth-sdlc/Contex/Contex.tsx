import { createContext, useContext } from "react";
import { TokenProductType } from "../Types/types";

/**
 * Create a contex of state and setState
 * The initial state variable will be the token and the product list
 */

type ContexType = {
  state: TokenProductType;
  setState: (state: TokenProductType) => void;
};
const GlobalContex = createContext<ContexType>({
  state: { token: "", product: [] },
  setState: () => {},
});

export default GlobalContex;
