import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const ExperienceBlock = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "brown" }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      date={props.duration}
      iconStyle={{ background: "black", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{props.company}</h4>
      <ul>
        {props.details.map((x, i) => (
          <div style={{ padding: "1px" }}>{x}</div>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default ExperienceBlock;
