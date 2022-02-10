import React,{Fragment} from 'react'
import classes from './skills.module.css';
import htmlLogo from '../Images/html.png'
import css from '../Images/css.png'
import javascript from '../Images/javascript.png'
import bootstrap from '../Images/bootstrap.png'
import react from '../Images/react.png'
import cpp from '../Images/cpp.png'
const Skill =()=>{
    return(
        <Fragment>
<div className={classes.title}>
    Skills    
</div>
<div className={classes.skill}>
<div>
    <img src={htmlLogo} alt="html"/>
</div>
<div>
<img src={css} alt="css"/>
</div>
<div>
<img src={javascript} alt="javascript"/>
</div>
<div>
<img src={bootstrap} alt="bootstrap"/>
</div>
<div>
<img src={react} alt="react"/>
</div>
<div>
<img src={cpp} alt="cpp"/>
</div>
<div></div>
</div>
        </Fragment>
    );
};
export default Skill;