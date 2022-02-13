import React,{Fragment} from "react";
import classes from './Projects.module.css';
const Projects =()=>{
    return(
    <Fragment>
              <div className={classes.head}>Projects</div>
              <div className={classes.Projects}>
                  <div className={classes.card}>1
                  <div className={classes.hiddenCard}>2</div>   
                  </div>
                  <div className={classes.card}>2</div>
                  <div className={classes.card}>3</div>
                  <div className={classes.card}>4</div>
                  <div className={classes.card}>4</div>
                  <div className={classes.card}>4</div>
              </div>
    </Fragment>)
};
export default Projects;