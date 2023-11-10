import React from "react";
import p from "./Profile.module.css";
import logo from "../Images/ab.jpg";
import { Edit } from "@mui/icons-material";
import { auth } from "../Config/Firebase";

export default function Profile(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form
        action=""
        style={props.theme1}
        className={p.form}
        onSubmit={handleSubmit}
      >
        <div className={p.container} style={props.theme2}>
          <h2 className={p.h2}>My Profile</h2>
          <img className={p.img} src={auth?.currentUser?.photoURL} />
          <h4 className={p.upload} style={props.them2}>
            Edit picture
          </h4>
          <input type="image" src="" alt="" className={p.up} />
          <div className={p.item} style={props.theme3}>
            <label htmlFor="username" className={p.label}>
              Username:
            </label>
            <br />
            <input
              type="text"
              name="username"
              value={auth.currentUser.displayName}
              className={p.input}
              id=""
              readOnly
            />
            <br />
            <label htmlFor="email" className={p.label}>
              Email:
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={auth.currentUser.email}
              className={p.input}
              id=""
              readOnly
            />
            <br />
          </div>
        </div>
      </form>
    </>
  );
}
