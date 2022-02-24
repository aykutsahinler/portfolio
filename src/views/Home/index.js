import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
