import { Routes, Route } from "react-router-dom";
import Chargesheet from "./assets/Components/Chargesheet/Chargesheet";
import Complaintform from "./assets/Components/Complaint/Complaintform";
import Signin from "./assets/Components/Signin/Signin";
import Signup from "./assets/Components/Signup/Signup";
import Dashboard from "./assets/Components/Dashoard/Dashboard";
import NewsList from "./assets/Components/News/newslist";
import Header from "./assets/Components/Header/Header";
import Profile from "./assets/Components/Profile/Profile";
import Settings from "./assets/Components/Settings/Settings";
import Sample from "./assets/Components/Sample";
import Welcome from "./assets/Components/Welcome/Welcome";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import Feedback from "./assets/Components/Feedback/Feedback";
import Officers from "./assets/Components/Officers/Officers";
import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import a from "./App.module.css";

function App() {
  const [dark, setDark] = useState(false);
  const themeHead = {
    backgroundColor: dark ? "#0a0a0a" : "",
    color: dark ? "white" : "",
    borderBottom: dark ? "1px solid white" : "",
  };
  const theme1 = {
    backgroundColor: dark ? "#09090b" : "",
    color: dark ? "white" : "",
  };
  const theme2 = {
    backgroundColor: dark ? "#18181b" : "",
    color: dark ? "white" : "",
  };
  const theme_2 = {
    backgroundColor: dark ? "#18181b" : "",
    color: dark ? "white" : "",
    boxShadow: dark ? " 1px 1.5px 3px #525252 " : "",
  };
  const theme3 = {
    backgroundColor: dark ? "#262626" : "",
    color: dark ? "white" : "",
  };
  const themeSettings = {
    backgroundColor: dark ? "rgb(20,20,20)" : "",
    color: dark ? "white" : "",
  };
  const themeSide = {
    backgroundColor: dark ? "#18181b" : "",
    color: dark ? "white" : "",
    borderBottom: dark ? "1px solid white" : "",
    borderRight: dark ? "1px solid white" : "",
  };

  const lightMode = () => {
    setDark(false);
  };
  const darkMode = () => {
    setDark(true);
  };
  return (
    <>
      <LightMode
        className={a.light}
        onClick={lightMode}
        style={theme1}
        sx={{ fontSize: 27 }}
      />
      <DarkMode
        className={a.dark}
        onClick={darkMode}
        style={theme1}
        sx={{ fontSize: 27 }}
      />
      <Routes>
        <Route path="/" element={<Welcome theme1={theme1} />} />
        <Route
          path="/signin"
          element={<Signin theme1={theme1} theme2={theme2} theme3={theme3} />}
        />
        <Route
          path="/signup"
          element={<Signup theme1={theme1} theme2={theme2} />}
        />
        <Route
          path="/dashboard"
          element={[
            <Header
              theme1={theme1}
              themeHead={themeHead}
              themeSide={themeSide}
            />,
            <Dashboard theme1={theme1} theme2={theme2} theme_2={theme_2} />,
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
            <NewsList theme1={theme1} themeSettings={themeSettings} />,
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
            <Settings theme1={theme1} theme2={theme2} theme3={theme3} />,
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
            <About theme1={theme1} theme2={theme2} theme3={theme3} />,
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
