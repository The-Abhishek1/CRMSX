import React, { useEffect, useState } from "react";
import d from "./Dashboard.module.css";
import { auth, db, storage } from "../Config/Firebase";
import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  PeopleSharp,
  RunningWithErrors,
  Check,
  PendingActions,
  ReceiptSharp,
  Close,
} from "@mui/icons-material";

export default function Dashboard(props) {
  const [update, setUpdate] = useState(false);
  const [dashboard, setDashboard] = useState([]);
  const schema = yup.object().shape({
    CS: yup.string().min(1).required("Field Should not empty!"),
    FIR: yup.string().min(1).required(),
    TC: yup.string().min(1).required(),
    SC: yup.string().min(1).required(),
    PC: yup.string().min(1).required(),
    TO: yup.string().min(1).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const documentCollectionRef = collection(db, "Dashboard");
  useEffect(() => {
    const getOfficers = async () => {
      const data = await getDocs(documentCollectionRef);
      setDashboard(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(dashboard);
    };
    getOfficers();
  });
  // From Adding/Submission
  const handleSubmitAdd = async (data) => {
    console.log(data);

    const userDoc = doc(db, "Dashboard", "DashboardID");

    try {
      await updateDoc(userDoc, data);
      setUpdate(false);

      console.log("Document Updated with an Id: DashboardID");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {update ? (
        <form
          className={d.form}
          style={props.theme}
          onSubmit={handleSubmit(handleSubmitAdd)}
        >
          <Close
            className={d.close}
            onClick={() => {
              setUpdate(false);
            }}
          />
          <label htmlFor="crimes" className={d.label}>
            Enter Total Crimes:
          </label>
          <input type="number" className={d.input} {...register("CS")} />

          <p className={d.p}>{errors.CS?.message}</p>

          <br />
          <label htmlFor="fir" className={d.label}>
            Enter Total FIR:
          </label>
          <input type="number" className={d.input} {...register("FIR")} />
          <p className={d.p}>{errors.FIR?.message}</p>
          <br />
          <label htmlFor="criminals" className={d.label}>
            Enter Total Criminals:
          </label>
          <input type="number" className={d.input} {...register("TC")} />
          <p className={d.p}>{errors.TC?.message}</p>
          <br />
          <label htmlFor="solved" className={d.label}>
            Enter Total Cases Solved:
          </label>
          <input type="number" className={d.input} {...register("SC")} />
          <p className={d.p}>{errors.SC?.message}</p>
          <br />
          <label htmlFor="pending" className={d.label}>
            Enter Total Pending Cases:
          </label>
          <input type="number" className={d.input} {...register("PC")} />
          <p className={d.p}>{errors.PC?.message}</p>
          <br />
          <label htmlFor="pending" className={d.label}>
            Enter Total Officer's:
          </label>
          <input type="number" className={d.input} {...register("TO")} />
          <p className={d.p}>{errors.TO?.message}</p>
          <br />
          <div className={d.button}>
            <button type="reset" className={d.b} id={d.b1}>
              Reset
            </button>
            <button type="submit" className={d.b} id={d.b2}>
              Submit
            </button>
          </div>
        </form>
      ) : null}

      <div className={d.whole} style={props.theme1}>
        <h1 className={d.head}>Dashboard</h1>
        <button
          className={d.update}
          onClick={() => {
            setUpdate(true);
          }}
        >
          Update
        </button>
        <div className={d.container}>
          <div className={d.item} style={props.theme_2}>
            <RunningWithErrors
              style={props.themeIcons}
              className={d.icon}
              sx={{ fontSize: 35 }}
            />
            <h2 className={d.h2}>Total Crimes</h2>
            {dashboard.map((dash) => {
              return (
                <h1 className={d.h1} style={props.theme2}>
                  {dash.CS}
                </h1>
              );
            })}
          </div>

          <div className={d.item} style={props.theme_2}>
            <ReceiptSharp
              style={props.themeIcons}
              className={d.icon}
              sx={{ fontSize: 35 }}
            />
            <h2 className={d.h2}>Total FIR</h2>
            {dashboard.map((dash) => {
              return (
                <h1 className={d.h1} style={props.theme2}>
                  {dash.FIR}
                </h1>
              );
            })}
          </div>
          <div className={d.item} style={props.theme_2}>
            <PeopleSharp
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total Criminals</h2>
            {dashboard.map((dash) => {
              return (
                <h1 className={d.h1} style={props.theme2}>
                  {dash.TC}
                </h1>
              );
            })}
          </div>
          <div className={d.item} style={props.theme_2}>
            <Check
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total Cases Solved</h2>
            {dashboard.map((dash) => {
              return (
                <h1 className={d.h1} style={props.theme2}>
                  {dash.SC}
                </h1>
              );
            })}
          </div>
          <div className={d.item} style={props.theme_2}>
            <PendingActions
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total pending cases</h2>
            {dashboard.map((dash) => {
              return (
                <h1 className={d.h1} style={props.theme2}>
                  {dash.PC}
                </h1>
              );
            })}
          </div>
          <div className={d.item} style={props.theme_2}>
            <PeopleSharp
              className={d.icon}
              sx={{ fontSize: 35 }}
              style={props.themeIcons}
            />
            <h2 className={d.h2}>Total officer's</h2>
            {dashboard.map((dash) => {
              return (
                <h1 className={d.h1} style={props.theme2}>
                  {dash.TO}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
