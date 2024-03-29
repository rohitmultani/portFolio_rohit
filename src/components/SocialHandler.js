import React, { Fragment } from "react";
import github from "../svg/github.svg";
import facebook from "../svg/facebook.svg";
import instagram from "../svg/instagram.svg";
import twitter from "../svg/twitter.svg";
import whatsapp from "../svg/whatsapp.svg";
import linkedln from "../svg/linkedln.svg";

const SocialHandler=()=>{
    return(<Fragment>
<div>
          <a
            href="https://github.com/rohitmultani"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/invites/contact/?i=1e06112izlkkd&utm_content=kkxzerz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://mobile.twitter.com/mr_rohit27"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rohit-multani-885b57213/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedln} alt="linkedln" />
          </a>
        </div>
        <div>   
          <a
            href="https://www.facebook.com/rohit.multani.71/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send/?phone=918979337990&text=Hello"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
        
    </Fragment>)
};
export default SocialHandler;