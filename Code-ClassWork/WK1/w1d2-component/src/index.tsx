import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    {/* <App /> */}
    {/* <UseEffect /> */}
    {/* <UseMemo /> */}
    <UseReducer />
  </div>
);
