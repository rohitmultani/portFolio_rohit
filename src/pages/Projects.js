import React, { Fragment, useEffect, useState } from "react";
import classes from "./Projects.module.css";
import ProjectBlock from "../components/ProjectBlock";
import hotstar from "../Images/hotstarl.png";
import hackathon from "../Images/Screenshot (2334).png";
import estate from "../Images/Screenshot (2336).png";
import profile from "../Images/Screenshot (2341).png";
import { VerticalTimeline } from "react-vertical-timeline-component";
const Projects = () => {
  const resolution = window.innerWidth;
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (resolution >= 320 && resolution <= 720) {
      setMobile(true);
    }
  }, [resolution]);

  return (
    <Fragment>
      <div className={classes.projects}>
        <div className={classes.head}>Projects</div>
        <VerticalTimeline animate={!isMobile}>
          <ProjectBlock
            pImg={hotstar}
            duration={"HotStar Clone"}
            linkGit={"https://github.com/rohitmultani/DisneyHotstar-Clone"}
            site={"https://rohithotstarclone.netlify.app/"}
          />
          <ProjectBlock
            pImg={hackathon}
            duration={"Hacthon Orgniser"}
            linkGit={"https://github.com/rohitmultani/Hackathon_organizer"}
            site={"https://rohitmultani.github.io/Hackathon_organizer/##/"}
          />
          <ProjectBlock
            pImg={estate}
            duration={"RealEstate Site"}
            linkGit={"https://github.com/rohitmultani/RealEstateSite"}
            site={"https://rohitmultani.github.io/RealEstateSite/"}
          />
          <ProjectBlock
            pImg={profile}
            duration={"PortFolio"}
            linkGit={"https://github.com/rohitmultani/portFolio_rohit"}
            site={"https://rohitmultani.github.io/portFolio_rohit/"}
          />
        </VerticalTimeline>
      </div>
    </Fragment>
  );
};
export default Projects;
