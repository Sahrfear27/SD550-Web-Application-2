import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  console.log("Inside the component");
  useEffect(() => {
    console.log(
      "Mounted this component: Means when the component is firt created"
    );
    /*
    Mounting Phase: Whole component is rendered. All console.log will be printed except the return cache value
    First time count is incremented: Outter console.log is printed and the return cache value is return
    */
    return () => console.log("Unmount this component");
  }, [count]);
  return (
    <div>
      <div>UseEffect</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
