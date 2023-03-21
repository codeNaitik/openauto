import React from "react";
import "../Style/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left_navbar">
        <h1>OPENAUTO</h1>
      </div>

      <div className="right_navbar_side">
        <div className="phone_navbar">
          <div className="phone_icon">
            <FontAwesomeIcon icon={faPhone} size="xs" className="phone"/>
            <p>+769 586 4558</p>
          </div>

          <div className="email_navbar">
            <div className="email_icon">
              <FontAwesomeIcon icon={faPhone} size="xs" className="phone" />

              <p> service@openauto.cs</p>
             
            </div>
          </div>

        </div>

        <button className="btn_navbar">Download the mobile app</button>
      </div>
    </div>
  );
};

export default Navbar;
