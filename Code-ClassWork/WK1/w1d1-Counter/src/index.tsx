import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App1-NotEfficient";
import App from "./App";
import UseRef from "./UseRef";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <App />
    <UseRef />
  </div>
);
