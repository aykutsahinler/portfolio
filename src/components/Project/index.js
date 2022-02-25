import DetailSlider from "./DetailSlider";
import ProjectContent from "./ProjectContent";
import styles from "./styles.module.css";
import { image4, image5, image6 } from "../../assets";

const Project = () => {
  const images = [
    {
      key: 0,
      image: image4,
    },
    {
      key: 1,
      image: image5,
    },
    {
      key: 2,
      image: image6,
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSide}>
        <div className={styles.leftSideContent}>
          <ProjectContent />
        </div>
      </div>
      <div className={styles.rightSide}>
        <DetailSlider images={images} />
      </div>
    </div>
  );
};

export default Project;
