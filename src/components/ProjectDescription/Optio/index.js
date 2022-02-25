import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { image4, image2, image3 } from "../../../assets/index";
import Slider from "../../ProjectSlider";
import styles from "./styles.module.css";

const Optio = () => {
  const [detail, setDetail] = useState(false);

  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/projects/optio") {
      setDetail(false);
    }
  }, [location]);

  const dataSource = {
    title: "OPTIO",
    desc: "2 yıl boyunca Kubilay Şahinler farklı firmalar    için freelance tasarımcı    oldu. Aynı zamanda kimi    mimari tasarım yarışmalarına katıldı.",
  };

  const images = [
    {
      key: 0,
      image: image2,
      to: window.location.pathname + "/detail?project=1",
    },
    {
      key: 1,
      image: image3,
      to: window.location.pathname + "/detail?project=2",
    },
    {
      key: 2,
      image: image4,
      to: window.location.pathname + "/detail?project=3",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      {!detail && (
        <>
          <div className={styles.descriptionContainer}>
            <p>{dataSource.title}</p>
            <p>{dataSource.desc}</p>
          </div>
          <Slider images={images} setDetail={setDetail} />
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Optio;
