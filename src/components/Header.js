import React,{Fragment,useState} from "react";
import logo from'../Images/rohit.jpeg'
import classes from "./Header.module.css";
import menu from '../svg/menu.svg'
import menuCLose from '../svg/menuClose.svg'
import SocialMedia from "./socialMedia";
import NavBar from "./NavBar";
// import classes from "./Main.module.css";

 const Header =(props)=>{
     const [menuOpen,isMenuOpen]=useState(false);
     const changeMenuHanlder =()=>{
         isMenuOpen(!menuOpen);
     }
     const displayMenu =(props)=>{
        isMenuOpen(props)
     }
return (
    <Fragment>
        {/* <img src={logo}  className={classes.image}/ > */}
        <div className={classes.bigBlock}>
        <div className={classes.header}>
        <div className={classes.name}>Rohit</div>
          { menuOpen && <NavBar menuBar={displayMenu}/>}
        <div className={classes.drop}>
        {menuOpen?<img src={menuCLose} onClick={changeMenuHanlder}/> :<img src={menu} onClick={changeMenuHanlder}/>}
        </div>
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
          <SocialMedia/>
    </Fragment>
)
 };
 export default Header;