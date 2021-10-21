import Slider from "../../ProjectSlider";

import styles from "./styles.module.css";

const dataSource = {
  title: "Professional Architect",
  desc: "2 yıl boyunca Kubilay Şahinler farklı firmalar    için freelance tasarımcı    oldu. Aynı zamanda kimi    mimari tasarım yarışmalarına katıldı.",
};

const Architect = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionContainer}>
        <p>{dataSource.title}</p>
        <p>{dataSource.desc}</p>
      </div>
      <Slider />
    </div>
  );
};

export default Architect;
