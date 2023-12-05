import { useState } from "react";
import o from "./Officers.module.css";
import { useNavigate } from "react-router-dom";

function Officers(props) {
  const navigate = useNavigate();
  // Function to diplay Officers
  const handleView = () => {
    navigate("/officersview");
  };

  //Function to Add Officers
  const handleAdd = () => {
    navigate("/officersadd");
  };
  return (
    <>
      <div className={o.full} style={props.theme1}>
        <div className={o.message} style={props.theme}>
          <h2 className={o.mesh2}>Select Anyone</h2>
          <button onClick={handleAdd} className={o.mesb} id={o.mesb1}>
            add officers
          </button>
          <button onClick={handleView} className={o.mesb} id={o.mesb2}>
            view officers
          </button>
        </div>
      </div>
    </>
  );
}

export default Officers;
