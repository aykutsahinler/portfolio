import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { image4, image5, image6 } from "../../../assets/index";
import Slider from "../../Slider";
import styles from "./styles.module.css";

const Student = () => {
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useOutletContext();
  const location = window.location.pathname;

  const dataSource = {
    title: "Student",
    desc: "2 yıl boyunca Kubilay Şahinler farklı firmalar  için freelance tasarımcı  oldu. Aynı zamanda kimi  mimari tasarım yarışmalarına katıldı.",
  };

  const images = [
    {
      key: 0,
      image: image4,
      to: window.location.pathname + "/detail?project=1",
    },
    {
      key: 1,
      image: image5,
      to: window.location.pathname + "/detail?project=2",
    },
    {
      key: 2,
      image: image6,
      to: window.location.pathname + "/detail?project=3",
    },
  ];

  const projectDataSource = {
    year: 2020,
    name: "Student",
    area: "Student",
  };

  useEffect(() => {
    if (location === "/projects/student") {
      setDetail(false);
    }
    location.includes("/detail") ? setDetail(true) : setDetail(false);
  }, [location]);

  return (
    <>
      {!detail && (
        <div className={styles.mainContainer}>
          <div className={styles.descriptionContainer}>
            <p>{dataSource.title}</p>
            <p>{dataSource.desc}</p>
          </div>
          <Slider
            images={images}
            detail={detail}
            setDetail={setDetail}
            show={show}
            setShow={setShow}
          />
        </div>
      )}
      <Outlet context={projectDataSource} />
    </>
  );
};

export default Student;
