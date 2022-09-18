import React, { useEffect, useState } from "react";

import "../styles/WorkerRegistration.css";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wokerbanner from "../assets/wokerbanner.png";



const WorkerRegistration = () => {
  
  
  return (
    <>
      <Navbar />

      {/* --------------------------------REGISTRATION OF WORKERS------------------------------------ */}

      <div className="worker_registration">
        <div className="worker_registration_left">
          <h1>Earn More. Earn Respect. Safety Ensured.</h1>
          <h4>Join 30,000+ partners across India</h4>
        </div>
        <div className="worker_registration_right">
          <img src={wokerbanner} alt="" className="worker_register_banner" />
        </div>
      </div>

      <div className="worker_registration_mid">
        <div className="worker_registration_box">
          <h2>Let's get connected and help people by providing services</h2>
          <div className="worker_registration_inputs">
            <div className="worker_registration_name">
              <input
                type="text"
                className="worker_registration_name_input wr_inputs"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="worker_registration_mail">
              <input
                type="text"
                className="worker_registration_mail_input wr_inputs"
                placeholder="Mail ID"
                name="email"
              />
            </div>
            <div className="worker_registration_phone">
              <input
                type="text"
                className="worker_registration_phone_input wr_inputs"
                placeholder="Your phone number"
                name="phone"
              />
            </div>
            <div className="worker_registration_work">
              <input
                type="text"
                className="worker_registration_work_input wr_inputs"
                placeholder="Work your want to do ?"
                name="profession"
                list="browsers"
              />   

              <datalist id="browsers">
                
              </datalist>  

            </div>            
            <div className="worker_registration_password">
              <input
                type="password"
                className="worker_registration_password_input wr_inputs"
                placeholder="Set password"
                name="password"
              />
            </div>
          </div>

          <p className="worker_registration-paralogin">
            Already a member of this website ?
            <Link to="/workerlogin" className="worker_registration-login">
              &nbsp;Login
            </Link>
          </p>

          <div className="worker_registration_join_button_div">
            {window.innerWidth < 430 ? (
              <Link to="sign-up" className="worker_registration-button">
                <button className="worker_join_btn" type="submit" >
                  Register
                </button>
              </Link>
            ) : (
              <Link to="sign-up" className="worker_registration-button">
                 <button className="worker_join_btn" type="submit">
                  Register
                </button>
              </Link>
            )}

          </div>
        </div>
      </div>

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  );
};

export default WorkerRegistration;
