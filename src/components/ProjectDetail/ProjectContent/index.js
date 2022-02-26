import styles from "./styles.module.css";

const ProjectContent = ({ setHeight, titleDataSource }) => {
  const projectTitleDataSource = [
    {
      key: 0,
      title: "Name:",
      value: titleDataSource.name,
    },
    {
      key: 1,
      title: "Year:",
      value: titleDataSource.year,
    },
    {
      key: 2,
      title: "Area:",
      value: titleDataSource.area,
    },
  ];
  const dataSource = [
    {
      chapter1: {
        key: 0,
        text1: titleDataSource.text1,
        img1: titleDataSource.img1,
        text2: titleDataSource.text2,
        img2: titleDataSource.img2,
        text3: titleDataSource.text3,
      },

      chapter2: {
        key: 1,
        text1: titleDataSource.text4,
        img1: titleDataSource.img3,
        text2: titleDataSource.text5,
        img2: titleDataSource.img4,
        text3: titleDataSource.text6,
      },

      chapter3: {
        key: 2,
        text1: titleDataSource.text7,
        img1: titleDataSource.img5,
      },
    },
  ];

  const onScroll = () => {
    const element = document.getElementById("aykut");
    setHeight(element.scrollTop);
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
            <img
              alt="imageDesc"
              loading="lazy"
              src={chapter.chapter1.img1}
              className={styles.contentImage}
            />
            <p className={styles.contentText}>{chapter.chapter1.text2}</p>
            <img
              alt="imageDesc"
              loading="lazy"
              src={chapter.chapter1.img2}
              className={styles.contentImage}
            />
            <p className={styles.contentText}>{chapter.chapter1.text3}</p>
            <br />
            <hr />
            <br />
            <p className={styles.contentText}>{chapter.chapter2.text1}</p>
            <img
              alt="imageDesc"
              loading="lazy"
              src={chapter.chapter2.img1}
              className={styles.contentImage}
            />
            <p className={styles.contentText}>{chapter.chapter2.text2}</p>
            <img
              alt="imageDesc"
              loading="lazy"
              src={chapter.chapter2.img2}
              className={styles.contentImage}
            />
            <p className={styles.contentText}>{chapter.chapter2.text3}</p>
            <br />
            <hr />
            <br />
            <p className={styles.contentText}>{chapter.chapter3.text1}</p>
            <img
              alt="imageDesc"
              loading="lazy"
              src={chapter.chapter3.img1}
              className={styles.contentImage}
            />
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
