import React, { Fragment } from "react";
import classes from './NavBar.module.css';
const NavBar=(props)=>{
    const changeMenuHandler =()=>{
        props.menuBar(false);
    };

    return(
        <Fragment>
            <ul className={classes.bar}> 
                <li onClick={changeMenuHandler}>Home</li>
                <li>Certificates</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Open Source</li>
                <li>Contact Me</li>
            </ul>
        </Fragment>
    );
};
export default NavBar;
