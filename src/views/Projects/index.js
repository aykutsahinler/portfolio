import { Outlet, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Projects = () => {
  const navigate = useNavigate();

  const dataSource = [
    { id: 0, title: "Co-Founder of OPTIO", endPoint: "optio" },
    { id: 1, title: "Freelance Designer", endPoint: "freelence" },
    { id: 2, title: "Professional Architect", endPoint: "professional" },
    { id: 3, title: "Student", endPoint: "student" },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.projectContainer}>
        <ul className={styles.projectList}>
          {dataSource.map((item) => {
            return (
              <li
                onClick={() => navigate(`/projects/${item.endPoint}`)}
                key={item.id}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Projects;
