import React, { useEffect, useState } from "react";
import o from "./Officers.module.css";
import logo from "../Images/anime.png";
import { ArrowBack, FacebookSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../Config/Firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Close } from "@mui/icons-material";
import { listAll, ref, getDownloadURL } from "firebase/storage";

function OfficerView(props) {
  //State for controlling officers
  const [showOfficers, setShowOfficers] = useState(true);
  //State For showing Deleted Message
  const [show, setShow] = useState(false);
  // State for Maintaining Officers
  const [officers, setOfficers] = useState([]);
  // For Images List
  const [imageList, setImageList] = useState([]);
  // Collection Reference
  const officerCollectionRef = collection(db, "Officers");

  //Function to get data when page is refreshed
  useEffect(() => {
    const imageRef = ref(storage, "officers/");
    const getOfficers = async () => {
      const data = await getDocs(officerCollectionRef);
      setOfficers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(officers);
    };
    getOfficers();
  });

  //Function to delete Officer
  const deleteOfficer = async (id) => {
    const userDoc = doc(db, "Officers", id);
    await deleteDoc(userDoc);
    setShow(true);
    console.log("Document deleted with ID:" + userDoc.id);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/officers");
  };
  const UpdateShow = (id) => {
    navigate("/officersupdate", { state: { deleteId: id } });
  };
  const handleHide = () => {
    setShow(false);
    setShowOfficers(true);
  };
  const messageHide = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <div className={o.notification} style={props.theme2}>
          <p className={o.np}>Record Deleted Successfully</p>
          <Close
            className={o.noteClose}
            sx={{ fontSize: 20 }}
            onClick={messageHide}
          />
        </div>
      ) : null}

      {showOfficers ? (
        <>
          <div className={o.div}>
            <h2 className={o.h2}>Officers Details</h2>
          </div>
          <ArrowBack
            onClick={handleBack}
            className={o.back}
            style={props.theme}
          />
          <div className={o.whole} style={props.theme1}>
            {officers.map((officer) => {
              return (
                <>
                  <div className={o.card} style={props.theme2}>
                    <img
                      src={officer.downloadUrl}
                      alt=""
                      className={o.officerImage}
                    />
                    <h4 className={o.h4}>Name: {officer.Name}</h4>
                    <p className={o.p}>ID No: {officer.IdNo}</p>
                    <p className={o.p}>Post: {officer.Post}</p>
                    <p className={o.p}>Case ID: {officer.CaseID}</p>
                    <div className={o.button}>
                      <button
                        type="button"
                        className={o.b}
                        id={o.b1}
                        onClick={() => {
                          deleteOfficer(officer.id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className={o.b}
                        id={o.b2}
                        onClick={() => {
                          UpdateShow(officer.id);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}

export default OfficerView;
