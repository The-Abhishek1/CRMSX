import Side from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const great = ">";

  const handleShow = () => {
    navigate("/");
  };

  const handleHide = () => {
    setShowLog(false);
  };

  const handleLog = () => {
    setShowLog(true);
    setSide(false);
  };
  const hide = () => {
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

      {showSide ? (
        <aside className={Side.aside} style={props.theme1}>
          {/* <h2 className={Side.h2}>CRMS</h2>
          <LocalPolice className={Side.police} /> */}
          <div className={Side.linkitems}>
            <Link
              to="/dashboard"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <GridView className={Side.item}></GridView>
              <h3 className={Side.h3}>Dashboard</h3>
            </Link>
            <Link
              to="/newfir"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <AddCircleOutlineSharp
                className={Side.item}
              ></AddCircleOutlineSharp>
              <h3 className={Side.h3}>New FIR</h3>
            </Link>
            <Link
              to="/chargesheet"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <ReceiptSharp className={Side.item}></ReceiptSharp>
              <h3 className={Side.h3}>Chargesheet</h3>
            </Link>
            <Link
              to="/officers"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <Groups2Sharp className={Side.item}></Groups2Sharp>
              <h3 className={Side.h3}>Officers</h3>
            </Link>
            <Link
              to="/news"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <Newspaper className={Side.item}></Newspaper>
              <h3 className={Side.h3}>News</h3>
            </Link>
            <Link
              to="/profile"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <AccountBoxSharp className={Side.item}></AccountBoxSharp>
              <h3 className={Side.h3}>Profile</h3>
            </Link>
            <Link
              to="/settings"
              style={props.themeSide}
              className={Side.link}
              onClick={hide}
            >
              <SettingsApplications
                className={Side.item}
              ></SettingsApplications>
              <h3 className={Side.h3}>Settings</h3>
            </Link>
            <Link
              className={Side.link}
              style={props.themeSide}
              id={Side.last}
              onClick={handleLog}
            >
              <Logout className={Side.item}></Logout>
              <h3 className={Side.h3}>Logout</h3>
            </Link>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export default Sidebar;
