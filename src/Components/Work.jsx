import React from "react";
import "../Style/Work.css";
import Pickup from "../pics/Pickup.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

import axios from "axios";

import {} from "react-icons/fa";
function App() {

  // usestate for email and name==

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(Email)
    // console.log(Name)

    const { data } = await axios.post(
      "/signup",
      { Email, Name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <>
{/* =====front-page => left_front_page + right_front_page (image)=== */}
    <div className="front_page">  

    {/* ====left front page==== */}
      <div className="left_front_page ">


<div className="front_page_heading">
  <p>Vehicle Maintenance From the comfort of Your Home</p>
</div>

<div className="front_page_content">
  <p>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</p>
</div>


{/* ======form for email name ==== */}
        <div id="formContent">
          {/* Login Form */}
          <form onSubmit={submitHandler} className="form_details">
            <input
              type="text"
              id="username"
              className="name"
              name="login"
              placeholder="Enter Your Name "
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              id="Email"
              className="name"
              name="login"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="submit"
              className="fadeIn "
              defaultValue="Log In" value="Submit"
              
            />
          </form>
          {/* Remind Passowrd */}
          {/* <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div> */}
        </div>
      </div>

      {/* ====right_front_page => image === */}

      <div className="right_front_page">
        <img src={Pickup} className="right_front_page_img"/>
      </div>

      </div>


{/* ======icons of brands ==== */}

      <div className="right_contact_us_">
          <div className="icon">


          <a href="#"> <FontAwesomeIcon icon={faFacebook} size="lg" className="icons"/> </a>
            <a href=""> <FontAwesomeIcon icon={faTwitter} size="lg" className="icons"/> </a>
            <a href=""> <FontAwesomeIcon icon={faYoutube} size="lg" className="icons"/> </a>
            <a href=""> <FontAwesomeIcon icon={faLinkedin} size="lg" className="icons"/></a>
            <a href=""> <FontAwesomeIcon icon={faInstagram} size="lg" className="icons"/></a>

            <FontAwesomeIcon icon="fa-solid faEnvelope" />
          
          {/* <FontAwesomeIcon icon={faTwitter} size="lg" className="icons"/> 
          <FontAwesomeIcon icon={faYoutube} size="lg" className="icons"/> 
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="icons"/> 
          <FontAwesomeIcon icon={faInstagram} size="lg" className="icons"/>  */}

          

          </div>

          

          
        </div>




    </>
  );
}

export default App;
