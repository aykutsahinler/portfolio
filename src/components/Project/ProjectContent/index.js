import styles from "./styles.module.css";
import { image1, image2, image3, image4, image5 } from "../../../assets";

const ProjectContent = () => {
  const projectTitleDataSource = [
    {
      key: 0,
      title: "Name:",
      value: "OPTIO",
    },
    {
      key: 1,
      title: "Year:",
      value: "2020",
    },
    {
      key: 2,
      title: "Area:",
      value: "Building",
    },
  ];
  const dataSource = [
    {
      chapter1: {
        key: 0,
        text1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
        img1: image1,
        text2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
        img2: image2,
        text3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
      },

      chapter2: {
        key: 1,
        text1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
        img1: image5,
        text2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
        img2: image4,
        text3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
      },

      chapter3: {
        key: 2,
        text1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
        img1: image3,
      },
    },
  ];

  const onScroll = () => {
    let element = document.getElementById("aykut");
    let height = element.scrollTop;
    console.log(height);

    switch (true) {
      case height <= 600:
        console.log("chapter 1");
        break;
      case 600 < height < 1050:
        console.log("chapter 2");
        break;
      case 1500 <= height:
        console.log("chapter 3");
        break;
      default:
        console.log("aykut");
        break;
    }

    if (height <= 600) {
      console.log("chapter 1");
    } else if (600 < height < 1050) {
      console.log("chapter 2");
    } else if (1050 <= height) {
      console.log("chapter 3");
    } else {
      console.log("aykut");
    }
  };

  return (
    <div className={styles.container} id="aykut" onScroll={onScroll}>
      <div className={styles.leftSideHeader}>
        <h1>Project Info</h1>
        <ul>
          {projectTitleDataSource.map((projectDetail) => {
            return (
              <li className={styles.list} key={projectDetail.key}>
                <p>{projectDetail.title}</p>
                <span>{projectDetail.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {dataSource.map((chapter, index) => {
        return (
          <div key={index} className={styles.contentContainer}>
            <p className={styles.contentText}>{chapter.chapter1.text1}</p>
            <img src={chapter.chapter1.img1} className={styles.contentImage} />
            <p className={styles.contentText}>{chapter.chapter1.text2}</p>
            <img src={chapter.chapter1.img2} className={styles.contentImage} />
            <p className={styles.contentText}>{chapter.chapter1.text3}</p>
            <br />
            <hr />
            <br />
            <p className={styles.contentText}>{chapter.chapter2.text1}</p>
            <img src={chapter.chapter2.img1} className={styles.contentImage} />
            <p className={styles.contentText}>{chapter.chapter2.text2}</p>
            <img src={chapter.chapter2.img2} className={styles.contentImage} />
            <p className={styles.contentText}>{chapter.chapter2.text3}</p>
            <br />
            <hr />
            <br />
            <p className={styles.contentText}>{chapter.chapter3.text1}</p>
            <img src={chapter.chapter3.img1} className={styles.contentImage} />
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContent;
