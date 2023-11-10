import { Routes, Route } from "react-router-dom";
import Chargesheet from "./assets/Components/Chargesheet/Chargesheet";
import Complaintform from "./assets/Components/Complaint/Complaintform";
import Dashboard from "./assets/Components/Dashoard/Dashboard";
import NewsList from "./assets/Components/News/newslist";
import Header from "./assets/Components/Header/Header";
import Profile from "./assets/Components/Profile/Profile";
import Settings from "./assets/Components/Settings/Settings";
import Welcome from "./assets/Components/Welcome/Welcome";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import Feedback from "./assets/Components/Feedback/Feedback";
import Officers from "./assets/Components/Officers/Officers";
import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import a from "./App.module.css";
import Sample from "./Sample";

function App() {
  const [dark, setDark] = useState(false);
  const [light, setLight] = useState(true);
  const themeHead = {
    backgroundColor: dark ? "#0a0a0a" : "",
    color: dark ? "white" : "white",
    borderBottom: dark ? "1px solid white" : "",
  };
  const theme = {
    backgroundColor: dark ? "black" : "",
    border: dark ? "1px solid white" : "",
    color: dark ? "white" : "",
  };
  const theme1 = {
    backgroundColor: dark ? "#09090b" : "",
    color: dark ? "white" : "",
  };

  const theme2 = {
    backgroundColor: dark ? "#18181b" : "",
    color: dark ? "white" : "white",
  };
  const theme_2 = {
    backgroundColor: dark ? "#18181b" : "",
    color: dark ? "white" : "",
    boxShadow: dark ? " 1px 1.5px 3px #525252 " : "",
  };
  const themeIcons = {
    color: dark ? "rgb(0, 255, 0)" : "white",
  };

  const theme3 = {
    backgroundColor: dark ? "#262626" : "",
    color: dark ? "white" : "",
  };
  const themeSide = {
    backgroundColor: dark ? "#18181b" : "",
    color: dark ? "white" : "",
    borderBottom: dark ? "1px solid white" : "",
    borderRight: dark ? "1px solid white" : "",
  };

  const lightMode = () => {
    setDark(true);
    setLight(false);
  };
  const darkMode = () => {
    setDark(false);
    setLight(true);
  };
  const lightTheme = {
    color: dark ? "white" : "",
  };
  const darkTheme = {
    color: light ? " rgb(180, 180, 180)" : "",
  };
  return (
    <>
      {light ? (
        <LightMode
          className={a.light}
          onClick={lightMode}
          style={darkTheme}
          sx={{ fontSize: 25 }}
        />
      ) : null}
      {dark ? (
        <DarkMode
          className={a.dark}
          onClick={darkMode}
          style={lightTheme}
          sx={{ fontSize: 25 }}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Welcome theme1={theme1} theme={theme} />} />
        <Route
          path="/dashboard"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Dashboard
              theme1={theme1}
              theme2={theme2}
              theme_2={theme_2}
              themeIcons={themeIcons}
            />,
          ]}
        />
        <Route
          path="/newfir"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Complaintform theme1={theme1} theme2={theme2} />,
          ]}
        />
        <Route
          path="/chargesheet"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Chargesheet theme1={theme1} theme2={theme2} />,
          ]}
        />
        <Route
          path="/officers"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Officers theme1={theme1} theme2={theme2} theme3={theme3} />,
          ]}
        />
        <Route
          path="/news"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <NewsList theme1={theme1} theme2={theme2} theme3={theme3} />,
          ]}
        />
        <Route
          path="/profile"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Profile theme1={theme1} theme2={theme2} theme3={theme3} />,
          ]}
        />
        <Route
          path="/settings"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Settings
              theme1={theme1}
              theme2={theme2}
              theme3={theme3}
              themeIcons={themeIcons}
            />,
          ]}
        />

        <Route
          path="/about"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <About
              theme1={theme1}
              theme2={theme2}
              theme3={theme3}
              themeIcons={themeIcons}
            />,
          ]}
        />
        <Route path="/sample" element={<Sample />} />
        <Route
          path="/contact"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Contact theme1={theme1} theme2={theme2} theme3={theme3} />,
          ]}
        />
        <Route
          path="/feedback"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Feedback theme1={theme1} theme2={theme2} theme3={theme3} />,
          ]}
        />
      </Routes>
    </>
  );
}

export default App;
