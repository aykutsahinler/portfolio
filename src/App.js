import { useRoutes } from "react-router-dom";
import Architect from "./components/ProjectDescription/Architect";
import Freelance from "./components/ProjectDescription/Freelance";
import Optio from "./components/ProjectDescription/Optio";
import Student from "./components/ProjectDescription/Student";
import Home from "./views/Home";
import Resume from "./views/Resume";
import Contact from "./views/Contact";
import Projects from "./views/Projects";

import "./App.css";
import Error from "./views/Error";

const App = () => {
  let routes = useRoutes([
    {
      key: "Error",
      element: <Error />,
      path: "*",
    },
    {
      element: <Home />,
      path: "/",
      children: [
        {
          path: "resume",
          key: "resume",
          element: <Resume />,
        },
        {
          path: "projects",
          key: "projects",
          element: <Projects />,
          children: [
            {
              path: "freelence",
              key: "freelence",
              element: <Freelance />,
            },
            {
              path: "professional",
              key: "professional",
              element: <Architect />,
            },
            {
              path: "student",
              key: "student",
              element: <Student />,
            },
            {
              path: "optio",
              key: "optio",
              element: <Optio />,
            },
          ],
        },
        {
          path: "contact",
          key: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return routes;
};
export default App;
