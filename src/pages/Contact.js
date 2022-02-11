import React, { Fragment } from "react";
import classes from "./Contact.module.css";
import contact from "../Images/contact.jpg";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import whatsapp from "../Images/whatsapp.png";
import linkedln from "../Images/linkedln.png";
import download from "../Images/download.png";
import gmail from "../Images/gmail.png";
import backg from "../Images/6530.jpg";
import resume from "../document/Resume.pdf";
import logo from '../Images/rohit.jpeg'
import SocialHandler from "../components/SocialHandler";
const Contact = () => {
  return (
    <Fragment>
        <div className={classes.heading}>Contact Me</div>
      <div className={classes.contactBlock}>
        <div className={classes.contactDetails}>
          <div className={classes.contactImage}>
            <img src={contact} className={classes.profile} />
          </div>
          <div>
            <a
              href="https://github.com/rohitmultani"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              <img src={github} alt="github" /> 
              <span className={classes.textValue}>
              See my Open Source Contribution
              </span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/rohitmultani"
              target="_blank"
              rel="noreferrer"
              style={{ color: "red" }}
            >
              <img src={instagram} alt="instagram" />
              <span>
               Follow me On Instagram
               </span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/rohitmultani"
              target="_blank"
              rel="noreferrer"
              style={{ color: "ligthBlue" }}
            >
              <img src={twitter} alt="twitter" /><span>Follow me on Twitter</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/rohit-multani-885b57213/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "darkBlue" }}
            >
              <img src={linkedln} alt="linkedln" /> <span>Connect with me on linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/rohitmultani"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
              <span> Like me on facebook</span>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=918979337990&text=Hello"
              target="_blank"
              rel="noreferrer"
              style={{ color: "green" }}
            >
              <img src={whatsapp} alt="whatsapp" /><span> Chat with me on Whatsapp</span>
            </a>
          </div>

          <div className={classes.resume}>
            <a href={resume} download>
              <img src={download} alt="whatsapp" />
              <button> <span>Download Resume </span></button>
            </a>
          </div>
        </div>
        <div className={classes.rightContainer}>
        <div className={classes.dp}>
    <img src={logo} alt="dp"/>
        </div>
        <div className={classes.email}>
        <a href="mailto:rohitmultani153@gmail.com">
        <img src={gmail} alt="gmail" /> <div><button>Email Me</button></div>
           </a>
        </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
