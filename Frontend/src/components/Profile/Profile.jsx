import React from "react";
import p from "./Profile.module.css";
import logo from "../Images/ab.jpg";
import { Diversity1, Edit } from "@mui/icons-material";
import { auth } from "../Config/Firebase";

export default function Profile(props) {
  return (
    <>
      <div action="" style={props.theme1} className={p.form}>
        <div className={p.container} style={props.theme2}>
          <h2 className={p.h2}>My Profile</h2>
          <img className={p.img} src={auth?.currentUser?.photoURL} />
          <label htmlFor="username" className={p.label}>
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            value={auth?.currentUser?.displayName}
            className={p.input}
            id=""
            readOnly
          />
          <br />
          <label htmlFor="email" className={p.label}>
            Email/User ID:
          </label>
          <br />
          <input
            type="text"
            name="email"
            value={auth?.currentUser?.email || auth?.currentUser?.uid}
            className={p.input}
            id=""
            readOnly
          />
        </div>
      </div>
    </>
  );
}
