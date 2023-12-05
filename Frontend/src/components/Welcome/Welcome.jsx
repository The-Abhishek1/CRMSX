import React, { useState } from "react";
import w from "./Welcome.module.css";
import police from "../Images/police.jpg";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  signinFacebook,
  signinGoogle,
  signinGithub,
} from "../Config/Firebase";
import google from "./google.png";
import facebook from "./facebook.png";
import github from "./github.png";
import { Close } from "@mui/icons-material";
function Welcome(props) {
  const navigate = useNavigate();

  //Google Signin
  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, signinGoogle);
      navigate("/dashboard");
      console.log("Sig in succeessfull!!");
    } catch (err) {
      console.log(err);
    }
  };

  // Facebook Signin
  const handleFacebook = async () => {
    try {
      await signInWithPopup(auth, signinFacebook);
      navigate("/dashboard");
      console.log("Sig in succeessfull!!");
    } catch (err) {
      console.log(err);
    }
  };

  //Github Signin
  const handleGithub = async () => {
    try {
      await signInWithPopup(auth, signinGithub);
      navigate("/dashboard");
      console.log("Sig in succeessfull!!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={w.div1} style={props.theme1}></div>
      <div className={w.div2}>
        <img src={police} className={w.img} />
        <h1 className={w.h1} style={props.theme1}>
          👋Welcome!
        </h1>
        <h4 className={w.h4} style={props.theme1}>
          CRMS is a realtime crime reporting system.
        </h4>
        <div className={w.button}>
          <button className={w.b} onClick={handleGithub} style={props.theme}>
            <img src={github} alt="" className={w.gimg3} /> Sign in with Github
          </button>
          <button className={w.b} onClick={handleGoogle} style={props.theme}>
            <img src={google} alt="" className={w.gimg1} /> Sign in with Google
          </button>
          <button className={w.b} onClick={handleFacebook} style={props.theme}>
            <img src={facebook} alt="" className={w.gimg2} /> Sign in with
            Facebook
          </button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
