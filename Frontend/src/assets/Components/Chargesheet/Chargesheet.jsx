import cs from "./Chargesheet.module.css";
import React, { useState } from "react";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Images/ab.jpg";

function Chargesheet(props) {
  //controlling Inputs
  const [inputs, setInputs] = useState({
    complaint_no: "",
    complaint_time: "",
    complaint_date: "",
    incident_time: "",
    incident_date: "",
    incident_type: "",
    incident_loc: "",
    complainant_name: "",
    complainant_details: "",
    accuse_name: "",
    accuse_details: "",
    incident_summary: "",
    evidence_info: "",
    witness_name: "",
    witness_no: "",
    witness_statement: "",
    officer_name: "",
    officer_id: "",
    officer_no: "",
    charge_details: "",
    recommendation_details: "",
    officer_sign: "",
  });

  //Hiding the chargesheet
  const [hide, setHide] = useState(true);
  //Showing Success message
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/chargesheet", inputs)
      .then((res) => setSuccess(true), setHide(false))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {success ? (
        <div className={cs.success} style={props.theme}>
          <h1 className={cs.s} style={props.themeSettings}>
            Success
          </h1>
          <Check className={cs.c} style={props.themeSettings}></Check>
          <button type="button" onClick={handleClick} className={cs.bu}>
            OK
          </button>
        </div>
      ) : null}
      {hide ? (
        <form
          action=""
          onSubmit={handleSubmit}
          className={cs.form}
          style={props.themeSettings}
        >
          <h1 className={cs.h1}>Chargesheet</h1>
          <h5 className={cs.h5}>(Under Section 173 CR. P.C.)</h5>
          <div className={cs.container}>
            <div className={cs.item} style={props.theme}>
              <h2 className={cs.h2}>Criminal photo</h2>
              <img src={logo} alt="" className={cs.img} />
              <h4 className={cs.hu4} style={props.themeSettings}>
                Upload picture
              </h4>
              <input type="file" src="" alt="" className={cs.imin} />
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Incident Info</h3>
              <label htmlFor="complaint_no" className={cs.label}>
                Complaint No:
              </label>
              <input
                type="text"
                name="complaint_no"
                id=""
                className={cs.input}
                onChange={handleInput}
                required
              />
              <br />
              <label htmlFor="complaint_time" className={cs.label}>
                Complaint Time:{" "}
              </label>
              <input
                type="text"
                name="complaint_time"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="complaint_date" className={cs.label}>
                Complaint Date:{" "}
              </label>{" "}
              <input
                type="date"
                name="complaint_date"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="incident_time" className={cs.label}>
                Incident Time:{" "}
              </label>{" "}
              <input
                type="text"
                name="incident_time"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="incident_date" className={cs.label}>
                Incident Date:{" "}
              </label>
              <input
                type="date"
                name="incident_date"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="incident_type" className={cs.label}>
                Incident Type:{" "}
              </label>
              <input
                type="text"
                name="incident_type"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="incident_loc" className={cs.label}>
                Incident Location:{" "}
              </label>
              <input
                type="text"
                name="incident_loc"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Complainant Details</h3>
              <label htmlFor="complainant_name" className={cs.label}>
                Complainant Name:{" "}
              </label>
              <input
                type="text"
                name="complainant_name"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="complainant_details" className={cs.label}>
                Personal Details:
              </label>
              <br />
              <textarea
                name="complainant_details"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Accuse Details</h3>
              <label htmlFor="accuse_name" className={cs.label}>
                Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="accuse_name"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="accuse_details" className={cs.label}>
                Personal Details:
              </label>
              <br />
              <textarea
                name="accuse_details"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Summary of the Offense</h3>
              <textarea
                name="incident_summary"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Evidence Info</h3>
              <textarea
                name="evidence_info"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
              <br />
              <input
                type="file"
                name="evidence_file"
                id={cs.file}
                onChange={handleInput}
              />
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Witness Info</h3>
              <label htmlFor="witness_name" className={cs.label}>
                Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="witness_name"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="witness_no" className={cs.label}>
                Contact No:{" "}
              </label>
              <input
                type="tel"
                name="witness_no"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="witness_statement" className={cs.label}>
                Statement:
              </label>
              <br />
              <textarea
                name="witness_statement"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Investing officer</h3>
              <label htmlFor="officer_name" className={cs.label}>
                Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="officer_name"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="officer_id" className={cs.label}>
                Badge/Id No:{" "}
              </label>
              <input
                type="text"
                name="officer_id"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
              <label htmlFor="officer_no" className={cs.label}>
                Contact No:{" "}
              </label>{" "}
              <input
                type="tel"
                name="officer_no"
                id=""
                onChange={handleInput}
                className={cs.input}
                required
              />
              <br />
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Charges Details</h3>
              <label htmlFor="charge_details" className={cs.label}>
                [List the specific charges or offences filed against the
                accused]
              </label>
              <br />
              <textarea
                name="charge_details"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <div className={cs.item} style={props.theme}>
              <h3 className={cs.h3}>Recommendation Details</h3>
              <label htmlFor="recommendation_details" className={cs.label}>
                [Include the investigation's recommendation, such as whether the
                accused should be prosecuted.]
              </label>
              <br />
              <textarea
                name="recommendation_details"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                onChange={handleInput}
                required
              ></textarea>
              <h4 className={cs.h4}>Filling Officer's Signature</h4>
              <input
                type="text"
                name="officer_sign"
                id={cs.fs}
                onChange={handleInput}
                required
              />
            </div>{" "}
            <div className={cs.but}>
              <button
                type="reset"
                value="reset"
                id={cs.reset}
                className={cs.button}
              >
                Reset
              </button>
              <button
                type="submit"
                value="submit"
                id={cs.submit}
                className={cs.button}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}

export default Chargesheet;
