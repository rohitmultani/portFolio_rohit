import React,{Fragment,useEffect} from 'react'
import classes from './skills.module.css';
import htmlLogo from '../Images/html.png'
import css from '../Images/css.png'
import javascript from '../Images/javascript.png'
import bootstrap from '../Images/bootstrap.png'
import react from '../Images/react.png'
import cpp from '../Images/cpp.png'
import python from '../Images/python.png'
import Aos from "aos";
import "aos/dist/aos.css"
const Skill =()=>{
        useEffect(()=>{
      Aos.init({duration:2000});
        },[]);
    return(
        <Fragment>
            <div className={classes.bigBlock}>
<div className={classes.title} data-aos="zoom-in-down">
    Skills    
</div>
<div className={classes.skill}>
<div>
    <img src={htmlLogo} alt="html" data-aos="fade-up"/>
</div>
<div>
<img src={css} alt="css" data-aos="fade-down"/>
</div>
<div>
<img src={javascript} alt="javascript" data-aos="fade-up"/>
</div>
<div>
<img src={bootstrap} alt="bootstrap" data-aos="fade-down"/>
</div>
<div>
<img src={react} alt="react" data-aos="fade-up"/>
</div>
<div>
<img src={cpp} alt="cpp" data-aos="fade-down"/>
</div>
<div><img src={python} alt="python"data-aos="fade-up"/></div>
</div>
        </div>
        </Fragment>
    );
};
export default Skill;