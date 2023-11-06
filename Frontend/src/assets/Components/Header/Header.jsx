import { Menu, DarkModeSharp, LightModeSharp } from "@mui/icons-material";
import head from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

function Header(props) {
  const [sideShow, setSide] = useState(false);

  return (
    <>
      {sideShow ? (
        <Sidebar
          themeSide={props.themeSide}
          themeSettings={props.themeSettings}
          theme={props.theme}
        />
      ) : null}
      <header className={head.header} style={props.themeHead}>
        <Menu
          theme={props.theme}
          sx={{ fontSize: 40 }}
          className={head.menu}
          onClick={() => setSide(!sideShow)}
        ></Menu>
        <input
          type="search"
          placeholder="Search or type complaint number"
          className={head.search}
        />
        {/* <LightModeSharp
          sx={{ fontSize: 30 }}
          className={head.light}
          onClick={(props.dark = false)}
        ></LightModeSharp>
        <DarkModeSharp
          sx={{ fontSize: 30 }}
          className={head.dark}
          onClick={(props.dark = true)}
        ></DarkModeSharp> */}
      </header>
    </>
  );
}

export default Header;
