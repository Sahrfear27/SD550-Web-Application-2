import React, { useContext } from "react";
import GlobalContex from "./Contex";

export default function Counter() {
  const { state, setState } = useContext(GlobalContex);

  return (
    <div>
      <h4>Inside Count</h4>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
}
