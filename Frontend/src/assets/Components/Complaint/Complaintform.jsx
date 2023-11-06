import { useState } from "react";
import cf from "./Complaintform.module.css";
import axios from "axios";
import { Check } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

function Complaintform(props) {
  // Generating Complaint No
  const complaint_num = "AB" + Math.floor(Math.random() * 1000000);
  const [no, setNo] = useState(complaint_num);

  //Date object
  const date = new Date();

  //Current Date
  const currentDate =
    date.getDate() + "/" + ` ${1 + date.getMonth()}` + "/" + date.getFullYear();
  const [c_date, setDate] = useState(currentDate);

  // Current Time
  const currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const [time, setTime] = useState(currentTime);

  //State for controlling user inputs
  const [inputs, setInputs] = useState({
    complaint_date: c_date,
    complaint_time: time,
    complaint_no: no,
    incident_date: "",
    incident_time: "",
    incident_loc: "",
    complainant_name: "",
    complainant_gender: "",
    complainant_no: "",
    complainant_email: "",
    complainant_address: "",
    complainant_type: "",
    typeof_incident: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_color: "",
    registered_no: "",
    suspect_name: "",
    suspect_physic: "",
    suspect_clothing: "",
    witness_name: "",
    witness_no: "",
    witness_statement: "",
    evidence_info: "",
    injuries: "",
    incident_description: "",
    comments: "",
    complainant_sign: "",
  });

  const [errors, setErrors] = useState({});

  //Showing Success message
  const [success, setSuccess] = useState(false);
  //Hiding Complaint Form
  const [hide, SetHide] = useState(true);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(inputs));
    console.log(inputs);
    if (
      errors.complainant_name === "" &&
      errors.complainant_no === "" &&
      errors.complainant_email === "" &&
      errors.complainant_address === "" &&
      errors.incident_description === "" &&
      errors.complainant_sign === ""
    ) {
      axios
        .post("http://localhost:8081/newfir", inputs)
        .then((res) => setSuccess(true), SetHide(false))
        .catch((err) => console.log(err));
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  const validate = (inputs) => {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Complaint name
    if (!inputs.complainant_name) {
      error.complainant_name = "Name is required!!";
    } else {
      error.complainant_name = "";
    }

    //Contact No
    if (!inputs.complainant_no) {
      error.complainant_no = "Number should not be empty!!";
    } else if (inputs.complainant_no.length != 10) {
      error.complainant_no = "Number is not valid!!";
    } else {
      error.complainant_no = "";
    }

    //Email
    if (!inputs.complainant_email) {
      error.complainant_email = "Email should not be empty!!";
    } else if (!email_pattern.test(inputs.complainant_email)) {
      error.complainant_email = "Email is not valid!!";
    } else {
      error.complainant_email = "";
    }

    //Address
    if (!inputs.complainant_address) {
      error.complainant_address = "Address should not be empty!!";
    } else {
      error.complainant_address = "";
    }

    //Description
    if (!inputs.incident_description) {
      error.incident_description = "Description is required!!";
    } else {
      error.incident_description = "";
    }

    //Complainant Signature
    if (!inputs.complainant_sign) {
      error.complainant_sign = "Signature is required!!";
    } else {
      error.complainant_sign = "";
    }
    return error;
  };

  return (
    <>
      {success ? (
        <div className={cf.success} style={props.theme}>
          <h1 className={cf.s} style={props.themeSettings}>
            Success
          </h1>
          <Check className={cf.c} style={props.themeSettings}></Check>
          <button type="button" onClick={handleClick} className={cf.bu}>
            OK
          </button>
        </div>
      ) : null}
      {hide ? (
        <form
          action=""
          onSubmit={handleSubmit}
          style={props.themeSettings}
          className={cf.form}
        >
          <h1 className={cf.h1}>FIR</h1>
          <h5 className={cf.h5}>(First Information Report)</h5>
          <div className={cf.container}>
            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Complaint details</h3>
              <label htmlFor="complaint_date" className={cf.label}>
                Complaint Date:
              </label>
              <input
                type="text"
                name="complaint_date"
                id=""
                readOnly
                className={cf.input}
                value={c_date}
                onChange={handleInput}
              />
              <br />
              <label htmlFor="complaint_time" className={cf.label}>
                Complaint Time:
              </label>
              <input
                type="text"
                name="complaint_time"
                id=""
                readOnly
                className={cf.input}
                value={time}
                onChange={handleInput}
              />
              <br />
              <label htmlFor="complaint_no" className={cf.label}>
                Complaint No:
              </label>{" "}
              <input
                type="text"
                name="complaint_no"
                id=""
                readOnly
                className={cf.input}
                onChange={handleInput}
                value={no}
              />
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Incident Information</h3>
              <label htmlFor="incident_date" className={cf.label}>
                Incident Date:
              </label>
              <input
                type="date"
                name="incident_date"
                id=""
                className={cf.input}
                onChange={handleInput}
                required
              />
              <br />
              <label htmlFor="incident_time" className={cf.label}>
                Incident Time:
              </label>
              <input
                type="text"
                name="incident_time"
                id=""
                className={cf.input}
                onChange={handleInput}
                required
              />
              <br />
              <label htmlFor="incident_loc" className={cf.label}>
                Incident Loc:
              </label>
              <input
                type="text"
                name="incident_loc"
                id=""
                className={cf.input}
                onChange={handleInput}
                required
              />
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Complainant Info</h3>
              <label htmlFor="complainant_name" className={cf.label}>
                Name:
              </label>
              <input
                type="text"
                name="complainant_name"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              {errors.complainant_name && (
                <p className={cf.ep}>{errors.complainant_name}</p>
              )}
              <br />
              <label htmlFor="male" className={cf.label}>
                Gender:
              </label>
              <div className={cf.sex}>
                <label htmlFor="male">
                  <input
                    type="radio"
                    name="complainant_gender"
                    id=""
                    value="Male"
                    onClick={handleInput}
                  />
                  Male{" "}
                </label>
                <label htmlFor="female" className={cf.so}>
                  {" "}
                  <input
                    type="radio"
                    name="complainant_gender"
                    id=""
                    value="Female"
                    onClick={handleInput}
                  />
                  Female
                </label>{" "}
                <label htmlFor="other" className={cf.so}>
                  <input
                    type="radio"
                    name="complainant_gender"
                    id=""
                    value="Other"
                    onClick={handleInput}
                  />
                  Other
                </label>
              </div>
              <br />
              <label htmlFor="complainant_con" className={cf.label}>
                Contact No:
              </label>{" "}
              <input
                type="tel"
                name="complainant_no"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              {errors.complainant_no && (
                <p className={cf.ep}>{errors.complainant_no}</p>
              )}
              <br />
              <label htmlFor="complainant_email" className={cf.label}>
                Email:
              </label>
              <input
                type="email"
                name="complainant_email"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              {errors.complainant_email && (
                <p className={cf.ep}>{errors.complainant_email}</p>
              )}
              <br />
              <label htmlFor="complainant_address" className={cf.label}>
                Adress:
              </label>
              <input
                type="text"
                name="complainant_address"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              {errors.complainant_address && (
                <p className={cf.ep}>{errors.complainant_address}</p>
              )}
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Complainant Type</h3>
              <select
                name="complainant_type"
                id=""
                onChange={handleInput}
                className={cf.select}
                required
              >
                <option>Choose</option>
                <option value="Victim">Victim</option>
                <option value="Witness">Witness</option>
                <option value="Repository Person">Repository Person</option>
              </select>

              <h3 className={cf.h3} id={cf.itype}>
                Type of Incident
              </h3>
              <select
                name="typeof_incident"
                id=""
                onChange={handleInput}
                className={cf.select}
                required
              >
                <option>Choose</option>
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Vandalism">Vandalism</option>
                <option value="Robbery">Robbery</option>
                <option value="Burglary">Burglary</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Vehicle Information</h3>
              <label htmlFor="vehicle_make" className={cf.label}>
                Make:{" "}
              </label>{" "}
              <input
                type="text"
                name="vehicle_make"
                onChange={handleInput}
                className={cf.input}
              />
              <br />
              <label htmlFor="vehicle_model" className={cf.label}>
                Model:{" "}
              </label>
              <input
                type="text"
                name="vehicle_model"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              <br />
              <label htmlFor="vehicle_color" className={cf.label}>
                Color:{" "}
              </label>{" "}
              <input
                type="color"
                name="vehicle_color"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              <br />
              <label htmlFor="registered_no" className={cf.label}>
                Registered plate No:{" "}
              </label>
              <input
                type="text"
                name="registered_no"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Suspect Info(if Known)</h3>
              <label htmlFor="suspect_name" className={cf.label}>
                Name:{" "}
              </label>
              <input
                type="text"
                name="suspect_name"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              <br />
              <label htmlFor="suspect_physic" className={cf.label}>
                Physical Description(Ex:height,built,hair color etc.):
              </label>
              <br />
              <textarea
                name="suspect_physic"
                id=""
                cols="45"
                rows="5"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
              <br />
              <br />
              <label htmlFor="suspect_clothing" className={cf.label}>
                Clothing and Identity Features(Ex:scras.):
              </label>
              <br />
              <textarea
                name="suspect_clothing"
                id=""
                cols="45"
                rows="5"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Witness Information</h3>
              <label htmlFor="witness_name" className={cf.label}>
                Name:{" "}
              </label>
              <input
                type="text"
                name="witness_name"
                id=""
                className={cf.input}
                onChange={handleInput}
              />
              <br />
              <label htmlFor="witness_no" className={cf.label}>
                Contact No:{" "}
              </label>
              <input
                type="text"
                name="witness_no"
                onChange={handleInput}
                id=""
                className={cf.input}
              />
              <br />
              <label htmlFor="witness_statement" className={cf.label}>
                Statement:
              </label>
              <br />
              <textarea
                name="witness_statement"
                id=""
                cols="45"
                rows="8"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Evidence Information</h3>
              <label htmlFor="evidence_info" className={cf.label}>
                (Describe any physical or digital evidence related to incident,
                including photo's,video's,document.)
              </label>
              <br />
              <textarea
                name="evidence_info"
                id=""
                cols="45"
                rows="10"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
              <br />
              <input
                type="file"
                name="file"
                id={cf.file}
                onChange={handleInput}
                className={cf.input}
              />
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Injuries</h3>
              <label htmlFor="injuries" className={cf.label}>
                (Descibe any injuries sustained by victim or suspects.)
              </label>
              <br />
              <textarea
                name="injuries"
                id=""
                cols="45"
                rows="10"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Description of the Incident</h3>
              <label htmlFor="incident_description" className={cf.label}>
                (Provide detailed narrative information about the incident.)
              </label>
              <br />
              <textarea
                name="incident_description"
                id=""
                cols="45"
                rows="8"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
              {errors.incident_description && (
                <p className={cf.ep}>{errors.incident_description}</p>
              )}
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Additional Comments</h3>
              <label htmlFor="comments" className={cf.label}>
                (Space for additional comments.)
              </label>
              <br />
              <textarea
                name="comments"
                id=""
                cols="45"
                rows="10"
                className={cf.textarea}
                onChange={handleInput}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme}>
              <h3 className={cf.h3}>Declaration:</h3>
              <input
                type="checkbox"
                name="check"
                id={cf.check}
                className={cf.input}
                defaultChecked={true}
              />
              <p className={cf.label_check}>
                I hereby, declare that the information provided <br /> in this
                complaint form is true and accurate to
                <br /> best of my knowledge.
              </p>
              <br />
              <label htmlFor="complainant_sign" className={cf.label}>
                Complainant sign:
              </label>
              <input
                type="text"
                name="complainant_sign"
                onChange={handleInput}
                className={cf.input}
              />
              {errors.complainant_sign && (
                <p className={cf.ep}>{errors.complainant_sign}</p>
              )}
              <br />
              <label htmlFor="date" className={cf.label}>
                Date:
              </label>{" "}
              <input
                type="text"
                name="date"
                id=""
                value={currentDate}
                className={cf.input}
                readOnly
              />
            </div>
            <div className={cf.but}>
              <button
                type="reset"
                value="reset"
                id={cf.reset}
                className={cf.button}
              >
                Reset
              </button>
              <button
                type="submit"
                value="submit"
                id={cf.submit}
                className={cf.button}
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
export default Complaintform;
