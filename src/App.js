import { useRoutes } from "react-router-dom";
import Architect from "./components/ShowCase/Architect";
import Freelance from "./components/ShowCase/Freelance";
import Optio from "./components/ShowCase/Optio";
import Student from "./components/ShowCase/Student";
import Project from "./components/ProjectDetail";
import Home from "./views/Home";
import Resume from "./views/Resume";
import Contact from "./views/Contact";
import Fields from "./views/Fields";
import Error from "./views/Error";

import "./App.css";

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
          element: <Fields />,
          children: [
            {
              path: "freelence",
              key: "freelence",
              element: <Freelance />,
              children: [
                {
                  path: "detail",
                  key: "detail",
                  element: <Project />,
                },
              ],
            },
            {
              path: "professional",
              key: "professional",
              element: <Architect />,
              children: [
                {
                  path: "detail",
                  key: "detail",
                  element: <Project />,
                },
              ],
            },
            {
              path: "student",
              key: "student",
              element: <Student />,
              children: [
                {
                  path: "detail",
                  key: "detail",
                  element: <Project />,
                },
              ],
            },
            {
              path: "optio",
              key: "optio",
              element: <Optio />,
              children: [
                {
                  path: "detail",
                  key: "detail",
                  element: <Project />,
                },
              ],
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
