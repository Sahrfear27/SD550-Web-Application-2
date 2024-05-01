import React, { useState } from "react";
type Props = {
  steps: number;
};
export default function Counter(props: Props) {
  const { steps } = props;
  const [counter, setCount] = useState(0);
  const handleCount = () => {
    setCount((preCount) => preCount + steps);
  };
  return (
    <div>
      <h3>Counter</h3>
      <p>{counter}</p>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}
