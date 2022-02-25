import { image1, image2, image3 } from "../../../assets/index";
import Slider from "../../ProjectSlider";
import styles from "./styles.module.css";

const Freelance = () => {
  const dataSource = {
    title: "Freelance Designer",
    desc: "2 yıl boyunca Kubilay Şahinler farklı firmalar    için freelance tasarımcı    oldu. Aynı zamanda kimi    mimari tasarım yarışmalarına katıldı.",
  };

  const images = [
    {
      key: 0,
      image: image1,
      to: "/",
    },
    {
      key: 1,
      image: image2,
      to: "/resume",
    },
    {
      key: 2,
      image: image3,
      to: "/contact",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionContainer}>
        <p>{dataSource.title}</p>
        <p>{dataSource.desc}</p>
      </div>
      <Slider images={images} />
    </div>
  );
};

export default Freelance;
