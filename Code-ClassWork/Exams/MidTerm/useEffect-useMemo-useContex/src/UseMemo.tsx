import React, { useMemo, useState } from "react";

/*
When the page render for the first time, The expensive task is printed and the cash value is return.
Wheneverytime count1 changes, the calculatedValue is return.
But when count2 changes, only the cache value from the function is return

I think i have some understanding about it after a careful review. 
During mounting,  everything inside the compute function will be printed. 
Every time the dependency of computed changes, everything inside the compute function will be printed overtime. 
The return value which will be cached. Eg, if i have count 2,  return cache value will only run every time 
count2 changes, but other statement inside compute function will not be triggered.
*/

export default function UseMemo() {
  const [count1, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const calculatedValue = () => {
    console.log("Expensive task");
    return "Result"; //The cache value
  };
  const computedValue = useMemo(() => calculatedValue(), [count1]);
  console.log(computedValue); //Return cache value will trigger every time count 2 changes
  return (
    <div>
      <h4>useMemo</h4>
      <button onClick={() => setCount(count1 + 1)}>Count1:{count1}</button>
      <button onClick={() => setCount2(count2 + 3)}>Count2:{count2}</button>
    </div>
  );
}

function UseMemos() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(0);
  const compute = () => {
    console.log("Expensive Task");
    return `Computed Results`; //Cache value
  };
  //   compute();
  const computed = useMemo(() => compute(), [count]);
  console.log(computed);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count1++</button>
      <button onClick={() => setTodo(todo + 1)}>todo</button>
    </div>
  );
}
