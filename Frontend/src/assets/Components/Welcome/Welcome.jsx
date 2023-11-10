import React, { useState } from "react";
import w from "./Welcome.module.css";
import police from "../Images/police.jpg";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, signin } from "../Config/Firebase";
import google from "./google.png";
import { Close } from "@mui/icons-material";

function Welcome(props) {
  //State for showing failure message
  const [show, setShow] = useState(true);

  const navigate = useNavigate();
  console.log(auth?.currentUser?.email);
  const handleClick = async () => {
    await signInWithPopup(auth, signin)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setShow(true);
        console.error(err);
      });
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      {show ? (
        <div className={w.failure} style={props.theme}>
          <Close
            className={w.close}
            style={props.theme}
            onClick={handleClose}
          />
          <h2 className={w.h2}>Failed to SignIn</h2>
        </div>
      ) : null}
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
          <button className={w.b} onClick={handleClick} style={props.theme}>
            Sign in with Google <img src={google} alt="" className={w.gimg} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
