import React, { Fragment } from "react";
import classes from "./Experience.module.css";
const Experience=()=>{
    return(
    <Fragment>
        <div className={classes.block}>
            <div className={classes.head}>Experience</div>
            <div className={classes.eBlock}>
            <div className={classes.Experience}>Web Developer @ Print Media Sub Council Of HBTU
            <p>June 2021 to - present</p>
            </div>
            <div className={classes.Experience}>Web Developer Scholar Intern at TwoWaits
            <p>November 2021</p>
            </div>
            
            </div>

        </div>
    </Fragment>)

};
export default Experience;