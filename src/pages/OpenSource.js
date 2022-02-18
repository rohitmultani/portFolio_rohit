import React, { Fragment,useEffect } from "react";
import classes from './OpenSource.module.css';
import Aos from "aos";
import "aos/dist/aos.css"
const OpenSource=()=>{
  useEffect(()=>{
    Aos.init({duration:2000,offset:200});
      },[]);
    return(
    <Fragment>
      <div className={classes.block}>
         <div className={classes.head} data-aos="zoom-in-down">OpenSource Contribution</div>
         <div className={classes.contribution}>
       <div className={classes.stat} data-aos="fade-up"> <img src="https://github-readme-stats.vercel.app/api?username=rohitmultani&show_icons=true&theme=tokyonight" alt="commits"/></div>
       <div className={classes.stat} data-aos="fade-down"> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohitmultani&theme=tokyonight" alt="lang"/></div>
       <div className={classes.stat} data-aos="fade-up">  <img src="https://github-readme-streak-stats.herokuapp.com/?user=rohitmultani&theme=tokyonight" alt="streak"/></div>
       <div className={classes.stat2} data-aos="fade-down">  <img src="https://ghchart.rshah.org/rohitmultani" alt="contribution"/></div>
       </div>
       </div>
    </Fragment>
    )
};
export default OpenSource;