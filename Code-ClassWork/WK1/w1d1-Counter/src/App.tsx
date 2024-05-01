import React, { useState } from "react";
import Counter from "./Counter";
export default function App() {
  return (
    <div>
      <Counter steps={10} />
      <Counter steps={1} />
    </div>
  );
}
