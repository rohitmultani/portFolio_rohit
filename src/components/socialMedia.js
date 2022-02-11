import React, { Fragment } from "react";
import classes from "./socialMedia.module.css";
import github from "../svg/github.svg";
import facebook from "../svg/facebook.svg";
import instagram from "../svg/instagram.svg";
import twitter from "../svg/twitter.svg";
import whatsapp from "../svg/whatsapp.svg";
import linkedln from "../svg/linkedln.svg";
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
