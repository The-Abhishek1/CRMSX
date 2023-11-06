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
  const theme = {
    backgroundColor: dark ? "black" : "",
    color: dark ? "white" : "",
    border: dark ? "1px solid white" : "",
  };
  const themeSettings = {
    backgroundColor: dark ? "black" : "",
    color: dark ? "white" : "",
  };
  const themeSide = {
    backgroundColor: dark ? "black" : "",
    color: dark ? "white" : "",
    borderBottom: dark ? "1px solid white" : "",
    borderRight: dark ? "1px solid white" : "",
  };
  const themeHead = {
    backgroundColor: dark ? "black" : "",
    color: dark ? "white" : "",
    borderBottom: dark ? "1px solid white" : "",
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
        style={themeSettings}
        sx={{ fontSize: 27 }}
      />
      <DarkMode
        className={a.dark}
        onClick={darkMode}
        style={themeSettings}
        sx={{ fontSize: 27 }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
            />
          }
        />
        <Route
          path="/dashboard"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Dashboard theme={theme} themeSettings={themeSettings} />,
          ]}
        />
        <Route
          path="/newfir"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Complaintform theme={theme} themeSettings={themeSettings} />,
          ]}
        />
        <Route
          path="/chargesheet"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Chargesheet theme={theme} themeSettings={themeSettings} />,
          ]}
        />
        <Route
          path="/news"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <NewsList theme={theme} themeSettings={themeSettings} />,
          ]}
        />
        <Route
          path="/profile"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Profile
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
            />,
          ]}
        />
        <Route
          path="/settings"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Settings theme={theme} themeSettings={themeSettings} />,
          ]}
        />
        <Route
          path="/signin"
          element={
            <Signin
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
            />
          }
        />
        <Route
          path="/about"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <About
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
            />,
          ]}
        />
        <Route path="/sample" element={<Sample />} />
        <Route
          path="/contact"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Contact
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
            />,
          ]}
        />
        <Route
          path="/feedback"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Feedback theme={theme} themeSettings={themeSettings} />,
          ]}
        />
        <Route
          path="/officers"
          element={[
            <Header
              theme={theme}
              themeSide={themeSide}
              themeSettings={themeSettings}
              themeHead={themeHead}
            />,
            <Officers theme={theme} themeSettings={themeSettings} />,
          ]}
        />
      </Routes>
    </>
  );
}

export default App;
