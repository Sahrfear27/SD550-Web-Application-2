import { ChangeEvent, useState } from "react";

function IncreaseByOne() {
  const [increaseByOne, setIncreaseByOne] = useState(0);
  const handleCount = () => {
    setIncreaseByOne(increaseByOne + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Increase By One</button>
      {increaseByOne}
    </div>
  );
}
function IncreaseByTen() {
  const [increaseByTen, setIncreaseByTen] = useState(0);
  const handleCount = () => {
    setIncreaseByTen(increaseByTen + 10);
  };
  return (
    <div>
      <button onClick={handleCount}>Increase By Ten</button>
      {increaseByTen}
    </div>
  );
}
export default function App() {
  return (
    <div>
      <IncreaseByOne />
      <br />
      <IncreaseByTen />
    </div>
  );
}
