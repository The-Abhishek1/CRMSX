import React from "react";
import p from "./Profile.module.css";
import logo from "../Images/ab.jpg";
import { Edit } from "@mui/icons-material";

export default function Profile(props) {
  return (
    <>
      <form action="" style={props.themeSettings} className={p.form}>
        <div className={p.container} style={props.theme}>
          <h2 className={p.h2}>My Profile</h2>
          <img className={p.img} src={logo} />
          <h4 className={p.upload}>Edit picture</h4>
          <input type="image" src="" alt="" className={p.up} />
          <div className={p.item} style={props.themeSettings}>
            <label htmlFor="username" className={p.label}>
              Username:
            </label>
            <br />
            <input type="text" name="username" className={p.input} id="" />
            <br />
            <label htmlFor="email" className={p.label}>
              Email:
            </label>
            <br />
            <input type="email" name="email" className={p.input} id="" />
            <br />
            <label htmlFor="phone_no" className={p.label}>
              Phone Number:
            </label>
            <br />
            <input type="tel" name="phone_no" className={p.input} id="" />
            <div className={p.but}>
              <button type="reset" className={p.button} id={p.reset}>
                Reset
              </button>
              <button type="submit" className={p.button} id={p.submit}>
                Submit
              </button>
            </div>
            <div className={p.edit}>
              <Edit className={p.icon} />
              <Edit className={p.icon} />
              <Edit className={p.icon} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
