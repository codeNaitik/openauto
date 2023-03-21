import React from "react";
import "../Style/Footer.css";
import Picku from "../pics/picku.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* // ============second-part=====left-image + right-side */}
      <div className="second-part">

        {/* ====left image==== */}
        <div className="left-image">
          <img src={Picku} className="picku" alt="picku" />
        </div>


{/* right image===== */}
        <div className="right-side">
          <div className="heading">
            <span>
              Focused on <br />
              Time Saving
            </span>
            <p>
              Lorem ipsum is simply dummy rtext of printin and typesettig
              industry lorem opsum has been the industtry standard dummy text
              ever since 1500s, when an unknown printer took a gallery of type
              and scrambled it to make a type soeciment book. it has sruvued not
              only fice centures, but also the leap into elctronic typesetting,
              remaining essentially uncahnges. it was
            </p>

            <button className="btn">Download the mobile app</button>
          </div>
        </div>
      </div>

      {/* // =======line===== */}
      <div className="line"></div>


{/* =========footer===== */}
      <div className="foot-1">
        <div className="left_logo">
          <h1>OPENAUTO</h1>

        </div>

        <div className="right_contact_us">
          <div className="phone">
          <p><FontAwesomeIcon icon={faPhone} size="xs"/>  +9898989898</p>
          </div>

          <div className="email">
            <p><FontAwesomeIcon icon={faPhone} size="xs"/>  service@openauto.ca</p>
            
          </div>
        </div>
      </div>



{/* ====footer end======== */}
      <div className="foot-2">
        <div className="left_logo_foot2">
          <p>Open auto @ all rights reserved</p>

        </div>

        <div className="right_contact_us_foot2">
        <a href="#"> <FontAwesomeIcon icon={faFacebook} size="lg" className="icons"/> </a>
            <a href=""> <FontAwesomeIcon icon={faTwitter} size="lg" className="icons"/> </a>
            <a href=""> <FontAwesomeIcon icon={faYoutube} size="lg" className="icons"/> </a>
            <a href=""> <FontAwesomeIcon icon={faLinkedin} size="lg" className="icons"/></a>
            <a href=""> <FontAwesomeIcon icon={faInstagram} size="lg" className="icons"/></a>

          
        </div>
      </div>



    </>
  );
};

export default Footer;
