import React from "react";
import d from "./Dashboard.module.css";
import {
  PeopleSharp,
  RunningWithErrors,
  Check,
  PendingActions,
  ReceiptSharp,
} from "@mui/icons-material";
export default function Dashboard(props) {
  return (
    <>
      <hr />
      <div className={d.whole} style={props.theme1}>
        <h1 className={d.head}>Dashboard</h1>
        <div className={d.container}>
          <div className={d.item} style={props.theme_2}>
            <RunningWithErrors className={d.icon} sx={{ fontSize: 35 }} />
            <h2 className={d.h2}>Total Crimes</h2>
            <h1 className={d.h1} style={props.theme2}>
              17
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <ReceiptSharp className={d.icon} sx={{ fontSize: 35 }} />
            <h2 className={d.h2}>Total FIR</h2>
            <h1 className={d.h1} style={props.theme2}>
              20
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <PeopleSharp className={d.icon} sx={{ fontSize: 35 }} />
            <h2 className={d.h2}>Total Criminals</h2>
            <h1 className={d.h1} style={props.theme2}>
              26
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <Check className={d.icon} sx={{ fontSize: 35 }} />
            <h2 className={d.h2}>Total Cases Solved</h2>
            <h1 className={d.h1} style={props.theme2}>
              10
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <PendingActions className={d.icon} sx={{ fontSize: 35 }} />
            <h2 className={d.h2}>Total pending cases</h2>
            <h1 className={d.h1} style={props.theme2}>
              33
            </h1>
          </div>
          <div className={d.item} style={props.theme_2}>
            <PeopleSharp className={d.icon} sx={{ fontSize: 35 }} />
            <h2 className={d.h2}>Total officer's</h2>
            <h1 className={d.h1} style={props.theme2}>
              27
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
