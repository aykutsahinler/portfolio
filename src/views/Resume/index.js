import styles from "./styles.module.css";

const Resume = () => {
  const experienceDataSource = [
    {
      key: 0,
      title: "2019 / Ongoing",
      items: [
        {
          key: 0,
          text: "Co-founder of OPTIO Design",
        },
        {
          key: 1,
          text: "Tech. / METU Technopolis",
        },
        {
          key: 2,
          text: "Ankara, Turkey /",
        },
        {
          key: 3,
          text: "Worked as Product Owner",
        },
      ],
    },
    {
      key: 1,
      title: "2019",
      items: [
        {
          key: 0,
          text: "Freelance Designer in Upwork /",
        },
        {
          key: 1,
          text: "Worldwide /",
        },
        {
          key: 2,
          text: "Worked as architect in different scale project in different phases of architectural design",
        },
      ],
    },
    {
      key: 2,
      title: "2018-2019",
      items: [
        {
          key: 0,
          text: "Architect in FREA Architecture /",
        },
        {
          key: 1,
          text: "Ankara, Turkey / ",
        },
        {
          key: 2,
          text: "Worked as architect in mostly competition projects.",
        },
      ],
    },
    {
      key: 3,
      title: "2018",
      items: [
        {
          key: 0,
          text: "Architect in BEST Aluminum / ",
        },
        {
          key: 1,
          text: "Ankara, Turkey / ",
        },
        {
          key: 2,
          text: "Responsible for application and shop drawings of projects.",
        },
      ],
    },
    {
      key: 4,
      title: "2017",
      items: [
        {
          key: 0,
          text: "Intern Architect in Vizzion ",
        },
        {
          key: 1,
          text: "Architects / Brussel, Belgium / ",
        },
        {
          key: 2,
          text: "Responsible for schematic design process of projects",
        },
      ],
    },
    {
      key: 5,
      title: "2016",
      items: [
        {
          key: 0,
          text: "Intern Architect DIA ",
        },
        {
          key: 1,
          text: "Construction/ Ankara, Turkey/ ",
        },
        {
          key: 2,
          text: "Responsible for control of the construction site.",
        },
      ],
    },
  ];

  const academicExperiencesDataSource = [
    {
      key: 0,
      title: "2021 / Ongoing",
      items: [
        {
          key: 0,
          text: "Part-time Instructor in Başkent",
        },
        {
          key: 1,
          text: "University / Ankara ",
        },
        {
          key: 2,
          text: "Responsible for designing the content of Parametric design course.",
        },
      ],
    },

    {
      key: 1,
      title: "2019",
      items: [
        {
          key: 0,
          text: "Jury Member in Architectural ",
        },
        {
          key: 1,
          text: "Design Studio-IV Final Jury,",
        },
        {
          key: 2,
          text: "TOBB University of Economics and Technology ",
        },
      ],
    },
  ];

  const educationDataSource = [
    {
      key: 0,
      title: "2018 / Ongoing",
      items: [
        {
          key: 0,
          text: "Master’s in Building Science/",
        },
        {
          key: 1,
          text: "Middle East Technical ",
        },
        {
          key: 2,
          text: "University / Thesis Name:",
        },
        {
          key: 3,
          text: "Modelling an Architectural",
        },
        {
          key: 4,
          text: "Process: Different",
        },
        {
          key: 5,
          text: "Methodologies for Architectural ",
        },
        {
          key: 6,
          text: "Design to Automate and Optimize the Process.",
        },
      ],
    },
    {
      key: 1,
      title: "2013-2017",
      items: [
        {
          key: 0,
          text: "Bachelor’s Degree in Architecture Departmant /",
        },
        {
          key: 1,
          text: "Middle East Technical University / CGPA: 3.02/4.00",
        },
      ],
    },
  ];

  const researchDataSource = [
    {
      key: 0,
      title: "2020",
      items: [
        {
          key: 0,
          text: "Şahinler, K., Yetkin, O., “ ‘Post truth discourse’ as a Justification Methodology in Architecture in a data driven world” Critical Readings in Architecture 8, 2020, Ankara",
        },
      ],
    },
    {
      key: 1,
      title: "2019",
      items: [
        {
          key: 1,
          text: "Şahinler, K., Yetkin, O. Manifesto on Future of the Architecture, OPTIO Publishing Series, 2019, Ankara",
        },
      ],
    },
    {
      key: 2,
      title: "2017",
      items: [
        {
          key: 2,
          text: "Şahinler, K., Yetiş, G., Yetkin, O., “Conflict of the Virtual/Real Space, Morphology of the Snowflake”, XI. MSTAS 2017 Poster Presentation, Ankara.",
        },
      ],
    },
  ];

  const workshopsDataSource = [
    {
      key: 0,
      title: "2017",
      items: [
        {
          key: 0,
          text: "Unity VR Course, “Create Your Own Virtual Reality” / Board of European Students of Technology (BEST) /Ukraine",
        },
      ],
    },
    {
      key: 1,
      title: "2014",
      items: [
        {
          key: 0,
          text: "Construction Workshop in OSTİM/Ankara",
        },
      ],
    },
  ];

  const awardsDataSource = [
    {
      key: 0,
      title: "2021 / YFYİ",
      items: [
        {
          key: 0,
          text: "TEB Special Award with Team OPTIO / San Francisco acceleration program",
        },
      ],
    },
    {
      key: 1,
      title: "2020 / Tübitak 1512",
      items: [
        {
          key: 0,
          text: "200k ₺ Grant with Team OPTIO for developing the idea / Autonomous Building Design System",
        },
      ],
    },
    {
      key: 2,
      title: "2020 / ÇEİS",
      items: [
        {
          key: 0,
          text: "2nd Prize with Ozan Yetkin. / Concrete pavilion design competition.",
        },
      ],
    },

    {
      key: 3,
      title: "2020 / Architectural Association 1927",
      items: [
        {
          key: 0,
          text: "Equivalent Award with Ozan Yetkin. / Paper competition on “Critical Readings on Architecture”",
        },
      ],
    },

    {
      key: 4,
      title: "2017 / Çuhadaroğlu",
      items: [
        {
          key: 0,
          text: "Honorable Mention with Hasan Hüseyin Özdurmuş. / Design competition about city on top of the water.",
        },
      ],
    },
    {
      key: 5,
      title: "2017 / Design Together",
      items: [
        {
          key: 0,
          text: "2nd Award with İrem Ardıç, Elif Çağlayan, Yaşar Çepni, Esat Çandır, Yasin Terzioğlu / BIM Competition that requires completed BIM Model with all related disciplines.",
        },
      ],
    },

    {
      key: 6,
      title: "2016 / Prosteel",
      items: [
        {
          key: 0,
          text: "Finalist team with İrem Ardıç, Elif Çağlayan, Elif Ceren Yılmaz / Steel structure designed that serves as a bazaar area in Ayvalık, Turkey",
        },
      ],
    },
  ];

  const certificatesDataSource = [
    {
      key: 0,
      title: "2020",
      items: [
        {
          key: 0,
          text: "Python Programming Course (Datacamp)",
        },
        {
          key: 1,
          text: "HTML Programming Course (Udemy)",
        },
      ],
    },
  ];

  const interestsDataSource = [
    {
      key: 0,
      text: "-Interested in History in Age of Enlightenment in Europe and Turkey",
    },
    {
      key: 1,
      text: "-Keen on Philosophy, Language Theories, Cognitive Linguistics, Logic and Mathematics",
    },
    {
      key: 2,
      text: "-Play Basketball",
    },
  ];

  const skillsDataSource = [
    {
      key: 0,
      title: "Drawing/Modelling/BIM",
      items: [
        {
          key: 0,
          name: "AutoCAD",
          value: "8/10",
        },
        {
          key: 1,
          name: "Rhinoceros",
          value: "10/10",
        },
        {
          key: 2,
          name: "Sketch-up",
          value: "6/10",
        },
        {
          key: 3,
          name: "Revit",
          value: "9/10",
        },
        {
          key: 4,
          name: "Fusion 360",
          value: "5/10",
        },
        {
          key: 5,
          name: "FormIt",
          value: "7/10",
        },
        {
          key: 6,
          name: "3ds Max",
          value: "5/10",
        },
      ],
    },
    {
      key: 1,
      title: "Computational Tools",
      items: [
        {
          key: 0,
          name: "Grasshopper",
          value: "10/10",
        },
        {
          key: 1,
          name: "Dynamo",
          value: "9/10",
        },
        {
          key: 2,
          name: "Unity",
          value: "6/10",
        },
        {
          key: 3,
          name: "RhinoScriptSytax",
          value: "6/10",
        },
        {
          key: 4,
          name: "Python",
          value: "6/10",
        },
        {
          key: 5,
          name: "HTML",
          value: "5/10",
        },
        {
          key: 6,
          name: "CSS",
          value: "4/10",
        },
      ],
    },
    {
      key: 2,
      title: "Analysis/Simulation",
      items: [
        {
          key: 0,
          name: "Navisworks",
          value: "7/10",
        },
        {
          key: 1,
          name: "Laydbug/Honeybee",
          value: "8/10",
        },
        {
          key: 2,
          name: "Autodesk Insight",
          value: "6/10",
        },
        {
          key: 3,
          name: "SAP 2000",
          value: "5/10",
        },
      ],
    },
    {
      key: 3,
      title: "Visualization Tools",
      items: [
        {
          key: 0,
          name: "Lumion",
          value: "8/10",
        },
        {
          key: 1,
          name: "Enscape",
          value: "6/10",
        },
      ],
    },
    {
      key: 4,
      title: "Presentation Tools",
      items: [
        {
          key: 0,
          name: "Adobe Illustrator",
          value: "9/10",
        },
        {
          key: 1,
          name: "Adobe Photoshop",
          value: "6/10",
        },
        {
          key: 2,
          name: "Adobe Indesign",
          value: "7/10",
        },
        {
          key: 3,
          name: "Adobe Premiere",
          value: "5/10",
        },
        {
          key: 4,
          name: "Figma",
          value: "7/10",
        },
      ],
    },
    {
      key: 5,
      title: "Documentation Tools",
      items: [
        {
          key: 0,
          name: "MS Office",
          value: "7/10",
        },
      ],
    },
  ];

  const languagesDataSource = [
    {
      key: 0,
      title: "",
      items: [
        {
          key: 0,
          name: "Turkish",
          value: "Native",
        },
        {
          key: 1,
          name: "English",
          value: "Advanced",
        },
        {
          key: 2,
          name: "German",
          value: "Beginner",
        },
      ],
    },
  ];

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <h3>experience</h3>

          {experienceDataSource.map((experience) => {
            return (
              <div className={styles.experienceContainer} key={experience.key}>
                <h5>{experience.title}</h5>
                <ul>
                  {experience.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.titleContainer}>
          <h3>academic experience</h3>

          {academicExperiencesDataSource.map((academicExperience) => {
            return (
              <div
                className={styles.experienceContainer}
                key={academicExperience.key}
              >
                <h5>{academicExperience.title}</h5>
                <ul>
                  {academicExperience.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <h3>education</h3>

          {educationDataSource.map((education) => {
            return (
              <div className={styles.experienceContainer} key={education.key}>
                <h5>{education.title}</h5>
                <ul>
                  {education.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.titleContainer}>
          <h3>research & publications</h3>

          {researchDataSource.map((research) => {
            return (
              <div className={styles.experienceContainer} key={research.key}>
                <h5>{research.title}</h5>
                <ul>
                  {research.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.titleContainer}>
          <h3>workshops</h3>

          {workshopsDataSource.map((workshop) => {
            return (
              <div className={styles.experienceContainer} key={workshop.key}>
                <h5>{workshop.title}</h5>
                <ul>
                  {workshop.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <h3>awards</h3>
          {awardsDataSource.map((award) => {
            return (
              <div className={styles.experienceContainer} key={award.key}>
                <h5>{award.title}</h5>
                <ul>
                  {award.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.titleContainer}>
          <h3>certificates</h3>

          {certificatesDataSource.map((certificate) => {
            return (
              <div className={styles.experienceContainer} key={certificate.key}>
                <h5>{certificate.title}</h5>
                <ul>
                  {certificate.items.map((item) => {
                    return <li key={item.key}>{item.text} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.titleContainer}>
          <h3 className={styles.interest}>Interests</h3>

          <div className={styles.experienceContainer}>
            <ul>
              {interestsDataSource.map((interest) => {
                return <li key={interest.key}>{interest.text}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.titleContainer}>
          <h3>skills</h3>

          {skillsDataSource.map((skill) => {
            return (
              <div className={styles.experienceContainer} key={skill.key}>
                <h5>{skill.title}</h5>
                <ul>
                  {skill.items.map((item) => {
                    return (
                      <li key={item.key} className={styles.skills}>
                        {item.text}
                        <span>{item.name} </span> <span>{item.value} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={styles.titleContainer}>
          <h3>languages</h3>

          {languagesDataSource.map((language) => {
            return (
              <div className={styles.experienceContainer} key={language.key}>
                <h5>{language.title}</h5>
                <ul>
                  {language.items.map((item) => {
                    return (
                      <li key={item.key} className={styles.skills}>
                        {item.text}
                        <span>{item.name} </span> <span>{item.value} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
