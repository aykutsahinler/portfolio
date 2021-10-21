import { useState } from "react";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Architect from "../../components/ProjectDescription/Architect";
import Freelance from "../../components/ProjectDescription/Freelance";
import Student from "../../components/ProjectDescription/Student";
import Optio from "../../components/ProjectDescription/Optio";

import styles from "./styles.module.css";

const Project = () => {
  const [toggle, setToggle] = useState(false);

  const [freelance, setFreelance] = useState(false);
  const [architect, setArchitect] = useState(false);
  const [optio, setOptio] = useState(false);
  const [student, setStudent] = useState(false);

  const dataSource = [
    { id: 0, title: "Co-Founder of OPTIO", endPoint: "optio" },
    { id: 1, title: "Freelance Designer", endPoint: "freelance" },
    { id: 2, title: "Professional Architect", endPoint: "professional" },
    { id: 3, title: "Student", endPoint: "student" },
  ];

  const switcher = () => {
    if (window.location.pathname === "/projects/freelance") {
      setFreelance(true);
      setArchitect(false);
      setStudent(false);
      setOptio(false);
    } else if (window.location.pathname === "/projects/professional") {
      setArchitect(true);
      setOptio(false);
      setFreelance(false);
      setStudent(false);
    } else if (window.location.pathname === "/projects/student") {
      setStudent(true);
      setFreelance(false);
      setOptio(false);
      setArchitect(false);
    } else if (window.location.pathname === "/projects/optio") {
      setOptio(true);
      setArchitect(false);
      setStudent(false);
      setFreelance(false);
    } else {
      console.log("hata");
    }
  };

  const open = () => {
    setToggle(true);
    switcher();
  };

  return (
    <Router>
      <div className={styles.mainContainer}>
        <div className={styles.projectContainer}>
          <p>Projects done by Kubilay Şahinler as;</p>

          <ul className={styles.projectList}>
            {dataSource.map((item) => {
              return (
                <li onClick={open} key={item.id}>
                  <Link to={`/projects/${item.endPoint}`}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {toggle === true && (
          <div className={styles.contentContainer}>
            {freelance && <Freelance />}
            {architect && <Architect />}
            {student && <Student />}
            {optio && <Optio />}
          </div>
        )}
      </div>

      <Switch>
        <Route path="/freelance">
          <Freelance />
        </Route>
        <Route path="/professional">
          <Architect />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/optio">
          <Optio />
        </Route>
      </Switch>
    </Router>
  );
};

export default Project;
