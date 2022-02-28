import DetailImage from "./DetailImage";
import ProjectContent from "./ProjectContent";
import styles from "./styles.module.css";
import { image1, image3, image2, image4, image5, image6 } from "../../assets";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Project = () => {
  const [currImage, setCurrImage] = useState(0);
  const [height, setHeight] = useState(0);
  const dataSource = useOutletContext();
  let images = useRef([]);

  images = [
    {
      key: 0,
      images: [
        {
          key: 0,
          image: image1,
        },
        {
          key: 1,
          image: image2,
        },
        {
          key: 2,
          image: image3,
        },
        {
          key: 3,
          image: image4,
        },
      ],
    },
    {
      key: 1,
      images: [
        {
          key: 0,
          image: image4,
        },
        {
          key: 1,
          image: image3,
        },
        {
          key: 2,
          image: image2,
        },
        {
          key: 3,
          image: image1,
        },
      ],
    },
    {
      key: 2,
      images: [
        {
          key: 0,
          image: image1,
        },
        {
          key: 1,
          image: image2,
        },
        {
          key: 2,
          image: image3,
        },
        {
          key: 3,
          image: image4,
        },
      ],
    },
  ];

  useEffect(() => {
    if (height <= 800) {
      setCurrImage(0);
    } else if (height > 600 && height <= 1800) {
      setCurrImage(1);
    } else if (height > 1700) {
      setCurrImage(2);
    }
  }, [height, currImage]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSide}>
        <div className={styles.leftSideContent}>
          <ProjectContent setHeight={setHeight} titleDataSource={dataSource} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <DetailImage index={currImage} images={images} />
      </div>
    </div>
  );
};

export default Project;
