import Side from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signinGoogle, auth } from "../Config/Firebase";
import { signOut } from "firebase/auth";

import {
  Close,
  GridView,
  AddCircleOutlineSharp,
  Groups2Sharp,
  Newspaper,
  ReceiptSharp,
  AccountBoxSharp,
  SettingsApplications,
  Logout,
  LocalPolice,
} from "@mui/icons-material";

function Sidebar(props) {
  //Hide and show side bar
  const [showSide, setSide] = useState(true);

  //Closing Logout
  const [showlog, setShowLog] = useState(false);

  const navigate = useNavigate();

  const handleShow = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out Successful");
        navigate("/");
      })
      .catch(() => {
        console.log("An error happened");
      });
  };

  const handleHide = () => {
    setShowLog(false);
  };

  const handleLog = () => {
    setShowLog(true);
    setSide(false);
  };

  return (
    <>
      {showlog ? (
        <div className={Side.logout} style={props.theme1}>
          <h3 className={Side.h3l} style={props.theme1}>
            Are you sure you want to Logout?
          </h3>
          <button
            type="button"
            className={Side.b}
            id={Side.b1}
            onClick={handleShow}
          >
            Yes
          </button>
          <button
            type="button"
            className={Side.b}
            id={Side.b2}
            onClick={handleHide}
          >
            No
          </button>
        </div>
      ) : null}
      <aside className={Side.aside} style={props.theme1}>
        <div className={Side.linkitems}>
          <NavLink
            to="/dashboard"
            style={props.themeSide}
            className={Side.link}
          >
            <GridView className={Side.item}></GridView>
            <h3 className={Side.h3}>Dashboard</h3>
          </NavLink>
          <NavLink to="/newfir" style={props.themeSide} className={Side.link}>
            <AddCircleOutlineSharp
              className={Side.item}
            ></AddCircleOutlineSharp>
            <h3 className={Side.h3}>New FIR</h3>
          </NavLink>
          <NavLink
            to="/chargesheet"
            style={props.themeSide}
            className={Side.link}
          >
            <ReceiptSharp className={Side.item}></ReceiptSharp>
            <h3 className={Side.h3}>Chargesheet</h3>
          </NavLink>
          <NavLink to="/officers" style={props.themeSide} className={Side.link}>
            <Groups2Sharp className={Side.item}></Groups2Sharp>
            <h3 className={Side.h3}>Officers</h3>
          </NavLink>
          <NavLink to="/news" style={props.themeSide} className={Side.link}>
            <Newspaper className={Side.item}></Newspaper>
            <h3 className={Side.h3}>News</h3>
          </NavLink>
          <NavLink to="/profile" style={props.themeSide} className={Side.link}>
            <AccountBoxSharp className={Side.item}></AccountBoxSharp>
            <h3 className={Side.h3}>Profile</h3>
          </NavLink>
          <NavLink to="/settings" style={props.themeSide} className={Side.link}>
            <SettingsApplications className={Side.item}></SettingsApplications>
            <h3 className={Side.h3}>Settings</h3>
          </NavLink>
          <NavLink
            className={Side.link}
            style={props.themeSide}
            id={Side.last}
            onClick={handleLog}
          >
            <Logout className={Side.item}></Logout>
            <h3 className={Side.h3}>Logout</h3>
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
