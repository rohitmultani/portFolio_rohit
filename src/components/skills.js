import React, { Fragment, useEffect } from "react";
import classes from "./skills.module.css";
import htmlLogo from "../Images/html.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import react from "../Images/react.png";
import cpp from "../Images/cpp.png";
import git from "../Images/icons8-git-96.png";
import Jira from "../Images/jirar.png";
import Typescript from "../Images/typescript.png";
import Storybook from "../Images/storybook.png";
import Bitbucket from "../Images/bitbucket.png";
import Aos from "aos";
import "aos/dist/aos.css";
import SkillUI from "./SkillUI";
const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <div className={classes.bigBlock}>
        <div className={classes.title}>SKILLS</div>
        <div className={classes.skill}>
          <SkillUI logo={htmlLogo} name={"HTML"} />
          <SkillUI logo={css} name={"CSS"} />
          <SkillUI logo={javascript} name={"JAVASCRIPT"} />
          <SkillUI logo={react} name={"REACT JS"} />
          <SkillUI logo={Typescript} name={"TYPESCIRPT"} />
          <SkillUI logo={git} name={"GIT"} />
          <SkillUI logo={cpp} name={"C++"} />
          <SkillUI logo={Jira} name={"JIRA"} />
          <SkillUI logo={Bitbucket} name={"BITBUCKET"} />
          <SkillUI logo={Storybook} name={"STORYBOOK"} />
        </div>
      </div>
    </Fragment>
  );
};
export default Skill;
