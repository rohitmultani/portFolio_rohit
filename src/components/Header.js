import React, { Fragment } from "react";
import logo from "../Images/result.png";
import r from "../Images/iconR.png";
import classes from "./Header.module.css";
import SocialMedia from "./socialMedia";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.bigBlock}>
        <div className={classes.header}>
          <div className={classes.name}>
            <img src={r} alt="logo" className={classes.rImage} />
          </div>
          <div className={classes.drop}></div>
        </div>
        <div className={classes.content}>
          <div>
            <div className={classes.a1}>Hi, I`m</div>
            <div className={classes.a2}>Rohit Multani</div>
            <div className={classes.a5}>
              {" "}
              <span> Frontend Developer</span>
            </div>
            <div className={classes.a3}>
              Pursuing <span> Computer Science & Engineering</span>
            </div>
            <div className={classes.a4}>
              {" "}
              at Harcout Butler Technical University, Kanpur
            </div>
          </div>
          <div>
            <img src={logo} alt="logo" className={classes.profileImage} />
          </div>
        </div>
      </div>
      <SocialMedia />
    </Fragment>
  );
};
export default Header;
