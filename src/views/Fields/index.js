import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Projects = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const location = window.location.pathname;

  const dataSource = [
    { id: 0, title: "Co-Founder of OPTIO", endPoint: "optio" },
    { id: 1, title: "Freelance Designer", endPoint: "freelence" },
    { id: 2, title: "Professional Architect", endPoint: "professional" },
    { id: 3, title: "Student", endPoint: "student" },
  ];

  useEffect(() => {
    location.includes("/detail") ? setShow(false) : setShow(true);
  }, [location, show]);

  return (
    <>
      {show && (
        <div className={styles.mainContainer}>
          <div className={styles.projectContainer}>
            <ul className={styles.projectList}>
              {dataSource.map((item) => {
                return (
                  <div key={item.id}>
                    <li
                      onClick={() => navigate(`/projects/${item.endPoint}`)}
                      key={item.id}
                    >
                      {item.title}
                    </li>
                    <div
                      key={Math.random()}
                      className={[
                        styles.line +
                          " " +
                          (location.includes(`/projects/${item.endPoint}`)
                            ? styles.active
                            : []),
                      ].join("")}
                    ></div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <Outlet context={[show, setShow]} />
    </>
  );
};

export default Projects;
