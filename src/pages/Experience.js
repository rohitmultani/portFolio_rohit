import React, { Fragment,useEffect } from "react";
import classes from "./Experience.module.css";
import Aos from "aos";
import "aos/dist/aos.css"
const Experience=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
          },[]);
    return(
    <Fragment>
        <div className={classes.block}>
            <div className={classes.head} data-aos="fade-in">Experience</div>
            <div className={classes.eBlock}>
            <div className={classes.Experience} data-aos="fade-in">Web Developer @ Print Media Sub Council Of HBTU
            <p>June 2021 to - present</p>
            </div>
            <div className={classes.Experience} data-aos="fade-in">Web Developer Scholar Intern at TwoWaits
            <p>November 2021</p>
            </div>
            
            </div>

        </div>
    </Fragment>)

};
export default Experience;