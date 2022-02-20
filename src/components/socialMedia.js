import React, { Fragment } from "react";
import classes from "./socialMedia.module.css";
import SocialHandler from "./SocialHandler";

const SocialMedia = () => {
  return (
    <Fragment>
      <div className={classes.icon}>
        <SocialHandler/>
        <div className={classes.vBlock}></div>
      </div>
      <div className={classes.email}>
        <div className={classes.text}>
          <a href="mailto:rohitmultani153@gmail.com">
          rohitmultani153@gmail.com
          </a>
          </div>
        <div className={classes.vBlock2}></div>
      </div>
    </Fragment>
  );
};
export default SocialMedia;
