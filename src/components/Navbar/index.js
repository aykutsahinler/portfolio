import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const navigate = useNavigate();
  const location = window.location.pathname;

  const openBurger = () => {
    setIsopen(!isOpen);
    let el = document.getElementById("navbar");
    if (isOpen === true) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  };

  useEffect(() => {}, [location]);

  return (
    <>
      <div id="navbar" className={styles.navbarContainer}>
        <div className={styles.personContainer}>
          <p className={styles.logo}>ks</p>
          <p className={styles.name}>Kubilay Şahinler</p>
          <p className={styles.title}>Computational Designer</p>
        </div>
        <nav className={styles.linkContainer}>
          <ul>
            <li onClick={() => navigate("/resume")}>Resume</li>
            <div
              className={[
                styles.line +
                  " " +
                  (location === "/resume" ? styles.active : []),
              ].join("")}
            ></div>
            <li onClick={() => navigate("/projects")}>Projects</li>
            <div
              className={[
                styles.line +
                  " " +
                  (location.includes("/projects") ? styles.active : []),
              ].join("")}
            ></div>
            <li onClick={() => navigate("/contact")}>Contact</li>
            <div
              className={[
                styles.line +
                  " " +
                  (location === "/contact" ? styles.active : []),
              ].join("")}
            ></div>
          </ul>
        </nav>
      </div>
      <span onClick={openBurger} className={styles.open}>
        O
      </span>

      {isOpen === true && (
        <div id="navbar" className={styles.navbarContainer}>
          <div className={styles.personContainer}>
            <p className={styles.logo}>ks</p>
            <p className={styles.name}>Kubilay Şahinler</p>
            <p className={styles.title}>Computational Designer</p>
          </div>
          <nav className={styles.linkContainer}>
            <ul>
              <li onClick={() => navigate("/resume")}>Resume</li>
              <li onClick={() => navigate("/resume")}>Projects</li>
              <li onClick={() => navigate("/resume")}>Contact</li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
