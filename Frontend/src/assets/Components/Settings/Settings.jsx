import React, { useState } from "react";
import set from "./Settings.module.css";
import { Link } from "react-router-dom";
import {
  InfoSharp,
  ContactPhone,
  LogoutSharp,
  DeleteForever,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Settings(props) {
  //Showing delete message
  const [del, setDel] = useState(false);
  const handleDelete = () => {
    setDel(true);
  };

  //Delete btn
  const [delbtn, setDelbtn] = useState(false);
  const navigate = useNavigate();
  const handleWelcome = () => {
    navigate("/");
  };

  //Hiding delete message
  const handleHide = () => {
    setDel(false);
  };

  //Logout message
  const [logout, setLogout] = useState(false);
  const handleLogout = () => {
    setLogout(true);
  };
  const handleLogno = () => {
    setLogout(false);
  };
  const handleLogyes = () => {
    navigate("/signin");
  };

  //About page
  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <>
      {logout ? (
        <div className={set.delete} style={props.theme}>
          <h3 className={set.h31}>Are you sure you want to Logout?</h3>
          <div className={set.button}>
            <button className={set.lb} id={set.db1} onClick={handleLogno}>
              No
            </button>
            <button className={set.lb} id={set.db2} onClick={handleLogyes}>
              Yes
            </button>
          </div>
        </div>
      ) : null}
      {del ? (
        <div className={set.delete} id={set.del} style={props.theme}>
          <h3 className={set.h31}>
            Are you sure you want to delete this account?
          </h3>
          <div className={set.button}>
            <button className={set.db} id={set.db1} onClick={handleHide}>
              No, Keep this account
            </button>
            <button className={set.db} id={set.db2} onClick={handleWelcome}>
              Yes, Delete this account
            </button>
          </div>
        </div>
      ) : null}
      <div className={set.whole} style={props.themeSettings}>
        <div className={set.container} style={props.theme}>
          <h2 className={set.h2}>Settings</h2>
          <div className={set.items1} style={props.theme}>
            <h3 className={set.h3}>More info and support</h3>
            <Link
              to="/about"
              className={set.link}
              onClick={handleAbout}
              style={props.themeSettings}
            >
              <h4 className={set.h4}>About</h4>
            </Link>
            <Link
              to="/contact"
              className={set.link}
              style={props.themeSettings}
            >
              <h4 className={set.h4}>Contact us</h4>
            </Link>
            <Link
              to="/feedback"
              className={set.link}
              style={props.themeSettings}
            >
              <h4 className={set.h4}>Feedback us</h4>
            </Link>
          </div>
          <div className={set.icons1} style={props.themeSettings}>
            <InfoSharp className={set.i1} />
            <ContactPhone className={set.i1} />
            <Star className={set.i1} />
          </div>
          <div className={set.items2} style={props.theme}>
            <h3 className={set.h3}>Login</h3>
            <Link
              className={set.link}
              style={props.themeSettings}
              onClick={handleLogout}
            >
              <h4 className={set.h4}>Logout</h4>
            </Link>
            <Link
              onClick={handleDelete}
              className={set.link}
              style={props.themeSettings}
            >
              <h4 className={set.h4}>Delete account</h4>
            </Link>
          </div>
          <div className={set.icons2} style={props.themeSettings}>
            <LogoutSharp className={set.i2} />
            <DeleteForever className={set.i2} />
          </div>
        </div>
      </div>
    </>
  );
}
