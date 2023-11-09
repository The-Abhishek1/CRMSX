import {
  Menu,
  DarkModeSharp,
  LightModeSharp,
  Close,
} from "@mui/icons-material";
import head from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";

function Header(props) {
  const [sideShow, setSide] = useState(false);
  const [menu, setMenu] = useState(true);
  const [close, setClose] = useState(false);

  const handleShow = () => {
    setSide(true);
    setClose(true);
    setMenu(false);
  };

  const handleHide = () => {
    setSide(false);
    setClose(false);
    setMenu(true);
  };

  return (
    <>
      {sideShow ? (
        <Sidebar theme1={props.theme1} themeSide={props.themeSide} />
      ) : null}
      <header className={head.header} style={props.themeHead}>
        {menu ? (
          <Menu
            style={props.theme1}
            sx={{ fontSize: 36 }}
            className={head.menu}
            onClick={handleShow}
          ></Menu>
        ) : null}

        {close ? (
          <Close
            style={props.theme1}
            sx={{ fontSize: 26 }}
            className={head.close}
            onClick={handleHide}
          ></Close>
        ) : null}
        <input
          type="search"
          placeholder="Search or type complaint number"
          className={head.search}
        />
      </header>
    </>
  );
}

export default Header;
