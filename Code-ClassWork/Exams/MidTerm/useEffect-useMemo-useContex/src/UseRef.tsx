import React, { MouseEvent, useRef } from "react";

export default function UseRef() {
  const greetRef = useRef<HTMLHeadingElement>(null);
  const Change = (e: MouseEvent<HTMLButtonElement>) => {
    greetRef.current!.innerHTML = "Hi";
  };
  return (
    <div>
      <h1 ref={greetRef}>Hello</h1>
      <button onClick={Change}>Click</button>
    </div>
  );
}
