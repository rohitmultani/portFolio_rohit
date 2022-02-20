import React, { Fragment } from "react";
import classes from './NavBar.module.css';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavBar=(props)=>{
    const changeMenuHandler =()=>{
        props.menuBar(false);
    };

    return(
        <Fragment>
            <ul className={classes.bar}> 
                <li onClick={changeMenuHandler}> <Link to="/">Home</Link></li>
                <li> <HashLink to="/#Experience">Experience</HashLink></li>
                <li>< Link to="/Skills">Skills</Link></li>
                <li>< Link to="/Projects">Projects</Link></li>
                <li ><Link to="/Certificates">Certificates</Link></li>
                <li><Link to="/OpenSource">Open Source</Link></li>
                <li><Link to="/Contact"> Contact Me</Link></li>
            </ul>
        </Fragment>
    );
};
export default NavBar;
