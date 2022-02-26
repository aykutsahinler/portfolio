import DetailImage from "./DetailImage";
import ProjectContent from "./ProjectContent";
import styles from "./styles.module.css";
import { image4, image5, image6 } from "../../assets";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Project = () => {
  const [currImage, setCurrImage] = useState(false);
  const [height, setHeight] = useState(0);
  const dataSource = useOutletContext();
  let images = useRef([]);

  images = [
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
          <ProjectContent setHeight={setHeight} titleDataSource={dataSource} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <DetailImage image={currImage} />
      </div>
    </div>
  );
};

export default Project;
