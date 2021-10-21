import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Resume from "../../views/Resume";
import Projects from "../../views/Projects";
import Contact from "../../views/Contact";

import styles from "./styles.module.css";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const openBurger = () => {
    setIsopen(!isOpen);
    let el = document.getElementById("navbar");
    if (isOpen === true) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  };

  return (
    <Router>
      <div id="navbar" className={styles.navbarContainer}>
        <div className={styles.personContainer}>
          <p className={styles.logo}>ks</p>
          <p className={styles.name}>Kubilay Şahinler</p>
          <p className={styles.title}>Computational Designer</p>
        </div>
        <nav className={styles.linkContainer}>
          <ul>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
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
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
