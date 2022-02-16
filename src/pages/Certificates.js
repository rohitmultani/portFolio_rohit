import React, { Fragment } from "react";
import classes from "./Certificates.module.css";
import resume from "../document/Resume.pdf";
const Certificates = () => {
  return (
    <Fragment>
      <div className={classes.block}>
      <div className={classes.head}>Certificates</div>
      <div className={classes.certificates}>
        <div className={classes.cBlock}>
          <div className={classes.cName}>Winner_final</div>
          <div className={classes.cCollege}>NSS IIT ROORKEE</div>
          <div className={classes.cButton}>
            <a href="https://netcredential.com/verify/7PPXb06db7">  <button>See Credential</button></a>
          </div>
        </div>
        <div className={classes.cBlock}>
          <div className={classes.cName}>Workshop:Machine learning and Artificial intelligence by IBM</div>
          <div className={classes.cCollege}>Cognizance, IIT Roorkee</div>
          <div className={classes.cButton}>
          <a href="https://netcredential.com/verify/nrwr67bdc8"> <button>See Credential</button></a>
          </div>
        </div>
        <div className={classes.cBlock}>
          <div className={classes.cName}>Workshop:Cognizance `21</div>
          <div className={classes.cCollege}>Cognizance, IIT Roorkee</div>
          <div className={classes.cButton}>
          <a href="https://netcredential.com/verify/nrwr7d1102  ">   <button>See Credential</button></a>
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Certificates;
