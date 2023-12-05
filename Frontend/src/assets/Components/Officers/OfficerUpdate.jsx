import React, { useEffect, useState } from "react";
import o from "./Officers.module.css";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import OfficerView from "./OfficerView";
import { auth, db } from "../Config/Firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function OfficerUpdate(props) {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const handleHide = () => {
    navigate("/officersview");
  };
  const schema = yup.object().shape({
    Name: yup.string().required(),
    IdNo: yup.string().min(4).required(),
    Post: yup.string().required(),
    CaseID: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // Form Adding/Submission
  const handleSubmitAdd = async (data) => {
    const ID = location.state.deleteId;
    const userDoc = doc(db, "Officers", ID);
    try {
      await updateDoc(userDoc, data);

      setHide(false);
      setShow(true);

      console.log("Document Updated with an Id: ", ID);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {show ? (
        <div className={o.full} style={props.theme1}>
          <div className={o.success} style={props.theme}>
            <h3 className={o.h3}>Record Updated Successfully</h3>
            <button className={o.ok} onClick={handleHide}>
              Ok
            </button>
          </div>
        </div>
      ) : null}
      {hide ? (
        <div className={o.full} style={props.theme1}>
          <form
            className={o.update}
            style={props.theme}
            onSubmit={handleSubmit(handleSubmitAdd)}
          >
            <ArrowBack
              className={o.upback}
              style={props.theme}
              onClick={handleHide}
            />
            <label htmlFor="name" className={o.label}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              className={o.input}
              {...register("Name")}
            />
            <br />
            <label htmlFor="idno" className={o.label}>
              Id No:
            </label>
            <input
              type="text"
              name="idno"
              className={o.input}
              {...register("IdNo")}
            />
            <br />
            <label htmlFor="post" className={o.label}>
              Post:
            </label>
            <input
              type="text"
              name="post"
              className={o.input}
              {...register("Post")}
            />
            <br />
            <label htmlFor="caseid" className={o.label}>
              Case ID:
            </label>
            <input
              type="text"
              name="caseid"
              id=""
              className={o.input}
              {...register("CaseID")}
            />
            <div className={o.button2}>
              <button type="reset" className={o.b} id={o.b1}>
                Reset
              </button>
              <button type="submit" className={o.b} id={o.b2}>
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default OfficerUpdate;
