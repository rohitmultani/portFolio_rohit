import React, { Fragment, useEffect, useState } from "react";
import classes from "./Experience.module.css";
import ExperienceBlock from "../components/ExperienceBlock";
import { VerticalTimeline } from "react-vertical-timeline-component";
const Experience = () => {
  const arr1 = [
    "1. Designed and Developed various UI components using css, Javascript, and React.js.",
    " 2. Successfully managed and resolved a wide range of front-end issues, resulting in a 20-fold increase in interactivity",
    "3. Collaborated seamlessly with a cross-functional team to successfully develop and launch a fully functional website from scratch, delivering it 2 weeks ahead of the deadline.",
  ];

  const arr2 = [
    "1.Elevated work efficiency by 45 % through effective management and consistent maintenance of the ByteLearn UI library codebase and documentation.",
    " 2. Resolved 20-30 % of weekly Jira tickets assigned to the entire Front-end team, as reported and verified by the QA team",
    "3. Contributed to the development of new UI components in Storybook using React and Typescript, enhancing the user interface and expanding the library’s capabilities",
    "4. Championed the adoption and proficiency in utilizing Jira, Bitbucket, and Storybook",
  ];
  const stack1 = ["HTML,CSS,JavaScript,React.js"];
  const stack2 = ["HTML,CSS,JavaScript,React.js,TypeScript,StoryBook,Jira"];
  const resolution = window.innerWidth;
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (resolution >= 320 && resolution <= 720) {
      setMobile(true);
    }
  }, [resolution]);

  return (
    <Fragment>
      <div className={classes.block}>
        <div className={classes.head}>Experience</div>
        <VerticalTimeline lineColor={"white"} animate={!isMobile}>
          <ExperienceBlock
            company={"Vayu"}
            title={"FrontEnd Developer Intern"}
            duration={"Nov-2021 to Jan 2022"}
            details={arr1}
            stack={stack1}
          />
          <ExperienceBlock
            company={"ByteLearn EdTech Private Ltd."}
            title={"FrontEnd Developer Intern"}
            duration={"Dec-2022 to March 2023"}
            details={arr2}
            stack={stack2}
          />
        </VerticalTimeline>
      </div>
    </Fragment>
  );
};
export default Experience;
