import DetailSlider from "./DetailSlider";
import ProjectContent from "./ProjectContent";
import styles from "./styles.module.css";
import { image4, image5, image6 } from "../../assets";
import { useEffect, useState } from "react";

const Project = () => {
  const [currImage, setCurrImage] = useState(false);
  const [height, setHeight] = useState(0);

  let images = [
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

  useEffect(() => {
    if (height <= 800) {
      setCurrImage(images[0].image);
    } else if (height > 600 && height <= 1800) {
      setCurrImage(images[1].image);
    } else if (height > 1700) {
      setCurrImage(images[2].image);
    }
  }, [height, images]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSide}>
        <div className={styles.leftSideContent}>
          <ProjectContent setHeight={setHeight} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <DetailSlider image={currImage} />
      </div>
    </div>
  );
};

export default Project;
