import React, { Fragment } from "react";
import classes from "./Certificates.module.css";
import resume from "../document/Resume.pdf";
const Certificates = () => {
  return (
    <Fragment>
      <div className={classes.head}>Certificates</div>
      <div className={classes.certificates}>
        <div className={classes.cBlock}>
          <div className={classes.cName}>winner_final</div>
          <div className={classes.cCollege}>NSS IIT ROORKEE</div>
          <div className={classes.cDate}>Issued Jun 2021</div>
          <div className={classes.cID}>Credential ID 7PPXb06db7</div>
          <div className={classes.cButton}>
              <button>See Credential</button>
          </div>
        </div>
        <div className={classes.cBlock}>
          <div className={classes.cName}></div>
          <div className={classes.cCollege}></div>
          <div className={classes.cDate}></div>
          <div className={classes.cID}></div>
          <div className={classes.cButton}></div>
        </div>
        <div className={classes.cBlock}>
          <div className={classes.cName}></div>
          <div className={classes.cCollege}></div>
          <div className={classes.cDate}></div>
          <div className={classes.cID}></div>
          <div className={classes.cButton}></div>
        </div>
        <div className={classes.cBlock}>
          <div className={classes.cName}></div>
          <div className={classes.cCollege}></div>
          <div className={classes.cDate}></div>
          <div className={classes.cID}></div>
          <div className={classes.cButton}></div>
        </div>
      </div>
    </Fragment>
  );
};
export default Certificates;
