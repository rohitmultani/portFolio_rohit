import React, { Fragment } from "react";
import classes from './OpenSource.module.css';
const OpenSource=()=>{
    return(
    <Fragment>
         <div className={classes.head}>OpenSource Contribution</div>
         <div className={classes.contribution}>
       <div className={classes.stat}> <img src="https://github-readme-stats.vercel.app/api?username=rohitmultani&show_icons=true&theme=tokyonight" alt="commits"/></div>
       <div className={classes.stat}> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohitmultani&theme=tokyonight" alt="lang"/></div>
       <div className={classes.stat}>  <img src="https://github-readme-streak-stats.herokuapp.com/?user=rohitmultani&theme=tokyonight" alt="streak"/></div>
       <div className={classes.stat2}>  <img src="https://ghchart.rshah.org/rohitmultani" alt="contribution"/></div>
       </div>
    </Fragment>
    )
};
export default OpenSource;