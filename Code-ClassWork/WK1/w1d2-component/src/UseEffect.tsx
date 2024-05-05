import React, { useEffect, useState } from "react";
function MyComponent() {
  const [count, setCount] = useState(0);
  console.log("Inside Component");
  useEffect(() => {
    /*
    When the component is mounted, the return will be cached and wait until the component is unmounted
    The use effect has a callback function and dependencies:
    During mounting time, the callback function will be called. And Mounted this component will be printed
    The return only be called during unmounting time
    */
    console.log("Mounted this component");

    return () => console.log("Unmounted this component"); //This will only be called during unmounting time
  }, []);

  /*
This useEffect Has a function and a dependencies. The outter callback function has a
inner return callback function which will be cached.
First time the page render, outter function will be called first and "Count is 1. Return function is cashed"
is printed
When count is triggered, the innerf function will be called before the outter function
*/
  useEffect(() => {
    //First time the page render, Count is 1 will be printed on the console.
    // And the return will be cached. When count is clicked, the return be printed first before the first console.log
    console.log("Count is 1. Return function is cashed");
    return () => console.log("Count  Increases 2");
  }, [count]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>My Component</p>
      <p>{count}</p>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}

export default function UseEffect() {
  const [showHide, setShowHide] = useState(true);
  return (
    <div>
      {showHide && <MyComponent />}
      <button onClick={() => setShowHide(!showHide)}>Toggle</button>
    </div>
  );
}
