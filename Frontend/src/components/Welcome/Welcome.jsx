import React from "react";
import w from "./Welcome.module.css";
import police from "../Images/police.jpg";
import { Forward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Welcome(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signin");
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
          <button className={w.b} onClick={handleClick}>
            Explore <Forward className={w.link}></Forward>
          </button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
