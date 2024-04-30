import React, { useRef } from "react";

export default function UseRef() {
  const header = useRef<HTMLHeadingElement>(null);
  const change = () => {
    header.current!.innerHTML = "Bonjour";
  };
  return (
    <div>
      <h1 ref={header}>Hello</h1>
      <button onClick={change}>French?</button>
    </div>
  );
}
