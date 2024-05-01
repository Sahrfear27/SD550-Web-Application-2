import React, { createContext, useContext, useEffect, useState } from "react";

// ContexAPI: They are use to transer data across multiple component to prevent props drilling

/*
1. Creating the contex: It should be creaated globally
2. Provide the contex: The parent or top level component should be the provider:
 All component within contex.Provider will have access to consume the contex
 3. Consumer:Use in component that will consume the contex
*/

function Compoent1() {
  return <div>Component1</div>;
}

// Use the contex
function Compoent2() {
  const msg = useContext(MyMessageContex);

  return (
    <div className="border">
      <h4>Component2</h4>
      <p>Contex Message:{msg}</p>
    </div>
  );
}
function Compoent3() {
  return <div>Component3</div>;
}

// Use the contex here
function Compoent4() {
  const msg = useContext(MyMessageContex);
  return (
    <div>
      <h4>Component4</h4>
      <p>Contex Msg:{msg}</p>
    </div>
  );
}
// Create a contex
const MyMessageContex = createContext("Message to Children");
function App() {
  // Provide the contex to top level element
  const [state, setState] = useState("Initial state variables");
  return (
    <div>
      <MyMessageContex.Provider value={state}>
        <Compoent2 />
        <Compoent4 />
      </MyMessageContex.Provider>
      <Compoent1 />

      <Compoent3 />
    </div>
  );
}

export default App;
