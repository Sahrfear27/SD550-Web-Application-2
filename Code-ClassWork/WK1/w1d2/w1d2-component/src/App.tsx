import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function myComponent() {
  console.log("Rendered myComponent");
  useEffect(() => {
    console.log("Mount this component");
    return () => console.log("Unmount this component"); //This is wait until the function is unmounted
  });
  return <p>My Component</p>;
}
function App() {
  const [showHide, setShowHide] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
