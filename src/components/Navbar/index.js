import styles from "./styles.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Resume from "../../views/Resume";
import Projects from "../../views/Projects";
import Contact from "../../views/Contact";

function Navbar() {
  return (
    <Router>
      <div className={styles.navbarContainer}>
        <div className={styles.personContainer}>
          <p className={styles.logo}>ks</p>
          <p className={styles.name}>Kubilay Şahinler</p>
          <p className={styles.title}>Computational Designer</p>
        </div>
        <nav className={styles.linkContainer}>
          <ul>
            <li>
              {/* <Link to="/resume">Curriculum vitae</Link> */}
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
