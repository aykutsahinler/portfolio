import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";

import "./App.css";

const App = () => {
  return useRoutes(routes);
};

export default App;
