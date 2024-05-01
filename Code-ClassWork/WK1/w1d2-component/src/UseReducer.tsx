import React, { useReducer, useState } from "react";
/*
useReducer: It is use for custom Logic
const [state,  dispatch] = useReducer(reducer, initialValue)
 * Rules:
 * 1.Initial State
 * 2. Reduce Function : This returns a new state
 * 3. const [state,dispatch] = useReducer(<reducer>, <initial state>)
 * 4. Dispatch. You dispatch an action (type and data) 

 * 
 * */

// Using reducer

// Firsrt initial value
const initialValue = {
  count1: 0,
  count2: 0,
};

// State Type
type StateType = {
  count1: number;
  count2: number;
};

// Action Type
type ActionType = {
  type: string;
  data: StateType;
};
function reducer(state: StateType, action: ActionType) {
  const { type, data } = action;
  switch (type) {
    case "INC1":
      return { ...state, count1: data.count1 };
    case "INC2":
      return { ...state, count2: data.count2 };
    default:
      return initialValue;
  }
}

enum ACTION_TYPE {
  INC1 = "INC1",
  INC2 = "INC2",
}
export default function UseReducer() {
  //   const [count1, setCount1] = useState(0);
  //   const [count2, setCount2] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { count1, count2 } = state;
  return (
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      {/* <button onClick={() => setCount1(count1 + 1)}>count1++</button>
      <button onClick={() => setCount2(count2 + 1)}>count2++</button> */}
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPE.INC1,
            data: { ...state, count1: count1 + 1 },
          })
        }
      >
        count1++
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPE.INC2,
            data: { ...state, count2: count2 + 2 },
          })
        }
      >
        count2++
      </button>
    </div>
  );
}
