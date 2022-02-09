import React,{Fragment} from "react";
import logo from'../Images/rohit.jpeg'
import classes from "./Header.module.css";
import menu from '../svg/menu.svg'
// import classes from "./Main.module.css";

 const Header =()=>{
return (
    <Fragment>
        {/* <img src={logo}  className={classes.image}/ > */}
        <div className={classes.bigBlock}>
        <div className={classes.header}>
        <div className={classes.name}>Rohit</div>
        <div className={classes.drop}>
        </div>
            <img src={menu}/>
        </div>
        <div className={classes.content}>
            <div>
            <div className={classes.a1}>Hi, I`m</div>
            <div className={classes.a2}>Rohit Multani</div>
            <div className={classes.a3}>Pursuing <span> Computer Science & Engineering</span></div>
            <div className={classes.a4}> at Harcout Butler Technical University, Kanpur</div>
            <div className={classes.a5}> I`m a React Front End Developer</div>
            </div>
            <div >
                <img src={logo} className={classes.profileImage}/>
            </div>
          </div>
          </div>
    </Fragment>
)
 };
 export default Header;