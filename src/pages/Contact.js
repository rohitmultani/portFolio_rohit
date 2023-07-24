import React, { Fragment } from "react";
import classes from "./Contact.module.css";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import whatsapp from "../Images/whatsapp.png";
import linkedln from "../Images/linkedln.png";
import download from "../Images/download.png";
import gmail from "../Images/gmail.png";
import resume from "../document/FAANGPath_Simple_Template (11).pdf";
import logo from "../Images/result.png";
import "aos/dist/aos.css";
const Contact = () => {
  return (
    <Fragment>
      <div className={classes.block}>
        <div className={classes.heading}>Contact Me</div>
        <div className={classes.contactBlock}>
          <div className={classes.contactDetails}>
            <div className={classes.b1}>
              <a
                href="https://github.com/rohitmultani"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <img src={gmail} alt="gmail" />
                <span className={classes.textValue}>Email Me</span>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rohitmultani"
                target="_blank"
                rel="noreferrer"
                style={{ color: "grey" }}
              >
                <img src={github} alt="github" />
                <span className={classes.textValue}>
                  See my Open Source Contribution
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/invites/contact/?i=1e06112izlkkd&utm_content=kkxzerz"
                target="_blank"
                rel="noreferrer"
                style={{ color: "red" }}
              >
                <img src={instagram} alt="instagram" />
                <span className={classes.textValue}>
                  Follow me On Instagram
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://mobile.twitter.com/mr_rohit27"
                target="_blank"
                rel="noreferrer"
                style={{ color: "ligthBlue" }}
              >
                <img src={twitter} alt="twitter" />
                <span className={classes.textValue}>Follow me on Twitter</span>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/rohit-multani-885b57213/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "lightBlue" }}
              >
                <img src={linkedln} alt="linkedln" />{" "}
                <span className={classes.textValue}>
                  Connect with me on linkedin
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/rohit.multani.71/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
                <span className={classes.textValue}> Like me on facebook</span>
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send/?phone=918979337990&text=Hello"
                target="_blank"
                rel="noreferrer"
                style={{ color: "green" }}
              >
                <img src={whatsapp} alt="whatsapp" />
                <span className={classes.textValue}>
                  {" "}
                  Chat with me on Whatsapp
                </span>
              </a>
            </div>

            <div className={classes.resume}>
              <a href={resume} download>
                <img src={download} alt="whatsapp" />
                <button>
                  {" "}
                  <span className={classes.textValue}>Download Resume </span>
                </button>
              </a>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.dp}>
              <img src={logo} alt="dp" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
