import React, { useMemo, useState } from "react";

// Use memo will only recompute when one of it dependencies change.
//The console.log will run for the first when the component render, the next redenr depends on the
//count 2
export default function UseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const compute = () => {
    console.log("Intensive Task");
    return `Computed Result`;
  };
  const cacheValue = useMemo(() => compute(), [count1]);
  return (
    <div>
      <div>
        {count1}, {count2}
      </div>
      <button onClick={() => setCount1(count1 + 1)}>INC1</button>
      <button onClick={() => setCount2(count2 + 1)}>INC2</button>
      <div>{cacheValue}</div>
    </div>
  );
}
