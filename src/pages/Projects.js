import React,{Fragment,useEffect} from "react";
import classes from './Projects.module.css';
import clock from '../Images/clock.jpeg'
import calculator from '../Images/calculator.jpeg'
import userlist from '../Images/userlist.jpeg'
import github from "../Images/github.png";
import chrome from "../Images/chrome.png";
import Aos from "aos";
import "aos/dist/aos.css"
const Projects =()=>{
    useEffect(()=>{
        Aos.init({duration:1000});
          },[]);
    return(
    <Fragment>
              <div className={classes.head} data-aos="zoom-in-down">Projects</div>
              <div className={classes.Projects}>
                  <div className={classes.card} >
                      <img src={clock} alt="clock" data-aos="fade-up"></img>
                  <div className={classes.hiddenCard}>Alarm Clock(JavaScript)
                  <div>
                      <span><a href="https://github.com/rohitmultani/Alarm-clock" target="_blank"><img src={github} alt="github"/></a></span>
                      <span><a href="https://rohitmultani.github.io/Alarm-clock/"target="_blank"><img src={chrome} alt="chrome"/></a></span>
                  </div>
                  </div>   
                  </div>
                  <div className={classes.card}>
                  <img src={calculator} alt="calculator" data-aos="fade-down">
                  </img>
                  <div className={classes.hiddenCard}>Calculator(JavaScript)
                  <div>
                      <span>
                         <a href="https://github.com/rohitmultani/Javascript__Calculator"target="_blank"><img src={github} alt="github"/></a></span>
                      <span><a href="https://rohitmultani.github.io/Javascript__Calculator/"target="_blank"><img src={chrome} alt="chrome"/></a></span>
                  </div>
                  </div>  
                   
                  </div>
                  <div className={classes.card}>
                  <img src={userlist} alt="use;ist" data-aos="fade-up"></img>
                  <div className={classes.hiddenCard}>UserList(React.Js)
                  <div>
                      <span><a href="https://github.com/rohitmultani/user-list"target="_blank"><img src={github} alt="github"/></a></span>
                      <span><a href="https://rohitmultani.github.io/user-list/"target="_blank"><img src={chrome} alt="chrome"/></a></span>
                  </div>
                  </div>   
                  </div>
                  
              </div>
    </Fragment>)
};
export default Projects;