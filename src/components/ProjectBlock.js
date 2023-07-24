import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import classes from "../pages/Projects.module.css";
import github from "../Images/github.png";
import chrome from "../Images/chrome.png";
const ProjectBlock = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "brown" }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      iconStyle={{ background: "black", color: "#fff" }}
      textClassName={classes.cardLayout}
    >
      <div className={classes.card}>
        <img src={props.pImg} alt={props.duration}></img>
        <div className={classes.hiddenCard}>
          {props.duration}
          <div>
            <span>
              <a href={props.linkGit} target="_blank" rel="noreferrer">
                <img src={github} alt="github" />
              </a>
            </span>
            <span>
              <a href={props.site} target="_blank" rel="noreferrer">
                <img src={chrome} alt="chrome" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default ProjectBlock;
