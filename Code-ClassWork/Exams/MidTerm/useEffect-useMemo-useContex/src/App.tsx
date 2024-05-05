import "bootstrap/dist/css/bootstrap.css";
import UseStateExaple1 from "./UseStateExam";
import UseStateExaple2 from "./UseStateExam";
import UseMemo from "./UseMemo";
import UseEffect from "./UseEffect";
import { useState } from "react";
import GlobalContex from "./Contex";
import Counter from "./Counter";
function App() {
  const [state, setState] = useState(10);
  return (
    <GlobalContex.Provider value={{ state, setState }}>
      <div className="text-center">
        <h4>Exam Review</h4>
        {/* <UseStateExaple2 /> */}
        <br />
        {/* <UseMemo /> */}
        <UseEffect />
      </div>
      <hr />
      <Counter />
    </GlobalContex.Provider>
  );
}

export default App;
