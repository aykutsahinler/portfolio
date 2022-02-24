import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/resume");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
