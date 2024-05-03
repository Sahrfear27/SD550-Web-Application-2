import "bootstrap/dist/css/bootstrap.css";
import Routers from "./Routes/route";
import { useRoutes } from "react-router-dom";
function App() {
  const elements = useRoutes(Routers);
  return (
    <div className="text-center">
      <h4>Passing Data Between Routers</h4>
      {elements}
    </div>
  );
}

export default App;
