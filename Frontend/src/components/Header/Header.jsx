import { Menu, DarkModeSharp, LightModeSharp } from "@mui/icons-material";
import head from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

function Header(props) {
  const [sideShow, setSide] = useState(false);

  return (
    <>
      {sideShow ? (
        <Sidebar theme1={props.theme1} themeSide={props.themeSide} />
      ) : null}
      <header className={head.header} style={props.themeHead}>
        <Menu
          theme={props.theme}
          sx={{ fontSize: 36 }}
          className={head.menu}
          onClick={() => setSide(!sideShow)}
        ></Menu>
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
