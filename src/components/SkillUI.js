import React, { Fragment} from "react";
import classes from "./skills.module.css";
const SkillUI = (props) => {
  return (
    <Fragment>
      <div className={classes.UI}>
        <img src={props.logo} alt="{props.name}" />
        <p className={classes.text}>{props.name}</p>
      </div>
    </Fragment>
  );
};
export default SkillUI;
