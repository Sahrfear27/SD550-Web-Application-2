import React, { useEffect, useState } from "react";

// When you return a function from a use effect, the function will be called before the next render
// export default function UseEffect() {
//   const [count, setCount] = useState(0);
//   console.log("Inside the component");

//   useEffect(() => {
//     console.log("Effect");
//     return () => console.log("Clean Up");
//   });
//   return (
//     <div>
//       <div>UseEffect</div>
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }

// When this page render, react will invoke the callback function.
//Anytime time the dependency change, the callback function will be invoked again
export default function UseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(`Effect Start`);
    return () => console.log(`Effect End`);
  }, [count2]);

  return (
    <div>
      {count1}, {count2}
      <button onClick={(_) => setCount1(count1 + 1)}>inc count1</button>
      <button onClick={(_) => setCount2(count2 + 1)}>inc count2</button>
    </div>
  );
}
// When the component is render, it will triggered the use effect, and invoke its callback function.
// and print Effect start
// When every the dependecies of the useEffect changes, the return function of the use effect will be called
//before the next render. that is "Effect end will be printed before effect start"

/*
When the component render, the useEffect will invoked once, since it dependencies is an empty array ,it
tell react that the useEffect whould not be called on every render

*/
// export default function UseEffect() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   useEffect(() => {
//     // Mount
//     console.log(`Effect empty deps`);
//     // Unmount
//     return () => console.log(`Unmount`);
//   }, []);
//   return (
//     <div>
//       {count1}, {count2}
//       <button onClick={(_) => setCount1(count1 + 1)}>inc count1</button>
//       <button onClick={(_) => setCount2(count2 + 1)}>inc count2</button>
//     </div>
//   );
// }
