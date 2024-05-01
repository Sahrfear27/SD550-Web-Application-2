import React, { useMemo, useState } from "react";

/*
Use memo will return the memorize value when one of the dependencies have changes
const cachedValue =useMemo(calculatedValue, dependencies)
calculatedValue: Function calculating the value to cached
It is use to improve performance
*/
export default function UseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const compute = () => {
    console.log("Expensive Task");
    return `Computed Results`;
  };
  //   compute();
  const computed = useMemo(() => compute(), [count1]);
  return (
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      <button onClick={() => setCount1(count1 + 1)}>count1++</button>
      <button onClick={() => setCount2(count2 + 1)}>count2++</button>
      <h3>{computed}</h3>
    </div>
  );
}
