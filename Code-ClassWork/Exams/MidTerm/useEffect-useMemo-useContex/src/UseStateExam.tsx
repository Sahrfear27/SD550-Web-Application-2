import React, { MouseEvent, useCallback, useMemo, useState } from "react";

// The component render every time the count is change. Causing console.log to be printed multiple times
function UseStateExaple1() {
  const [count, setCount] = useState(0);
  console.log("Inside usestate");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

// Solution

export default function UseStateExapl2() {
  const [count1, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  const handleCount1 = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleCount2 = () => {
    setCount2((prevCount) => prevCount + 2);
  };

  const compute = () => {
    return "Inside usestate2";
  };

  //   compute should only be printed when count1 changes
  const computed = useMemo(() => compute(), [count1]);
  console.log(computed);
  return (
    <div>
      <button onClick={handleCount1}>count1: {count1}</button>
      <button onClick={handleCount2}> count2: {count2}</button>
    </div>
  );
}
