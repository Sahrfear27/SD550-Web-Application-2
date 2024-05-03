import { useRoutes } from "react-router-dom";
import Routers from "./Routes/routes";

function App() {
  const elements = useRoutes(Routers);
  return (
    <div className="text-center">
      <h4>SPA Application</h4>
      {elements}
    </div>
  );
}

export default App;
