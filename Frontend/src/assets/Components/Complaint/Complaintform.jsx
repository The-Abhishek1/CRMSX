import { useState } from "react";
import cf from "./Complaintform.module.css";
import { auth, db, storage } from "../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Check } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Complaintform(props) {
  //Showing Success message
  const [success, setSuccess] = useState(false);
  //Hiding Complaint Form
  const [hide, setHide] = useState(true);
  const [evidence, setEvidence] = useState(null);
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

  //Schema for controlling inputs
  const schema = yup.object().shape({
    complaint_date: yup.string(),
    complaint_time: yup.string(),
    complaint_no: yup.string(),
    incident_date: yup.string().required("Date is required"),
    incident_time: yup.string().required("Time is required"),
    incident_loc: yup.string().required("Location is required"),
    complainant_name: yup.string().required("Name is required"),
    complainant_gender: yup.string().required("Gender is required"),
    complainant_no: yup.string().min(10).max(10).required("Number is required"),
    complainant_email: yup.string().email().required("Email is required"),
    complainant_address: yup.string().required("Address is required"),
    complainant_type: yup.string().required("Type is required"),
    typeof_incident: yup.string().required("Type is required"),
    vehicle_make: yup.string(),
    vehicle_model: yup.string(),
    vehicle_color: yup.string(),
    registered_no: yup.string(),
    suspect_name: yup.string(),
    suspect_physic: yup.string(),
    suspect_clothing: yup.string(),
    witness_name: yup.string(),
    witness_no: yup.string().min(10).max(10),
    witness_statement: yup.string(),
    evidence_info: yup.string(),
    injuries: yup.string(),
    incident_description: yup.string().required("Description is required"),
    comments: yup.string(),
    complainant_sign: yup.string().required("Sign is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitAdd = async (data) => {
    console.log(data);
    if (evidence == null) return;
    const evidenceRef = ref(storage, `evidence/${data.complaint_no}`);
    try {
      await uploadBytes(evidenceRef, evidence).then((res) => {
        console.log("Image Uploaded Succeesfully");
      }),
        getDownloadURL(evidenceRef).then((url) => {
          globalThis.firEvidence = url;
          console.log(firEvidence);
        });
      const docRef = await addDoc(collection(db, "Complaint"), {
        complaint_date: data.complaint_date,
        complaint_time: data.complaint_time,
        complaint_no: data.complaint_no,
        incident_date: data.incident_date,
        incident_time: data.incident_time,
        incident_loc: data.incident_loc,
        complainant_name: data.complainant_name,
        complainant_gender: data.complainant_gender,
        complainant_no: data.complainant_no,
        complainant_email: data.complainant_email,
        complainant_address: data.complainant_address,
        complainant_type: data.complainant_type,
        typeof_incident: data.typeof_incident,
        vehicle_make: data.vehicle_make,
        vehicle_model: data.vehicle_model,
        vehicle_color: data.vehicle_color,
        registered_no: data.registered_no,
        suspect_name: data.suspect_name,
        suspect_physic: data.suspect_physic,
        suspect_clothing: data.suspect_clothing,
        witness_name: data.witness_name,
        witness_no: data.witness_no,
        witness_statement: data.witness_statement,
        evidence_info: data.evidence_info,
        injuries: data.injuries,
        incident_description: data.incident_description,
        comments: data.comments,
        complainant_sign: data.complainant_sign,
        complaintEvidence: firEvidence,
      });

      setHide(false);
      setSuccess(true);

      console.log("Document Written Id: ", docRef.id);
    } catch (e) {
      console.error(e);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      {success ? (
        <div className={cf.full} style={props.theme1}>
          <div className={cf.success} style={props.theme}>
            <h1 className={cf.s}>Success</h1>
            <Check className={cf.c} sx={{ fontSize: 32 }}></Check>
            <button type="button" onClick={handleClick} className={cf.bu}>
              Continue
            </button>
          </div>
        </div>
      ) : null}
      {hide ? (
        <form
          action=""
          onSubmit={handleSubmit(handleSubmitAdd)}
          style={props.theme1}
          className={cf.form}
        >
          <h1 className={cf.h1}>FIR</h1>
          <h5 className={cf.h5}>(First Information Report)</h5>
          <div className={cf.container}>
            <div className={cf.item} style={props.theme2}>
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
                {...register("complaint_date")}
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
                {...register("complaint_time")}
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
                {...register("complaint_no")}
                value={no}
              />
            </div>

            <div className={cf.item} style={props.theme2}>
              <h3 className={cf.h3}>Incident Information</h3>
              <label htmlFor="incident_date" className={cf.label}>
                Incident Date:
              </label>
              <input
                type="date"
                name="incident_date"
                id=""
                className={cf.input}
                {...register("incident_date")}
              />
              <p className={cf.p}>{errors.incident_date?.message}</p>
              <br />
              <label htmlFor="incident_time" className={cf.label}>
                Incident Time:
              </label>
              <input
                type="text"
                name="incident_time"
                id=""
                className={cf.input}
                {...register("incident_time")}
              />
              <p className={cf.p}>{errors.incident_time?.message}</p>
              <br />
              <label htmlFor="incident_loc" className={cf.label}>
                Incident Loc:
              </label>
              <input
                type="text"
                name="incident_loc"
                id=""
                className={cf.input}
                {...register("incident_loc")}
              />
              <p className={cf.p}>{errors.incident_loc?.message}</p>
            </div>

            <div className={cf.item} style={props.theme2}>
              <h3 className={cf.h3}>Complainant Info</h3>
              <label htmlFor="complainant_name" className={cf.label}>
                Name:
              </label>
              <input
                type="text"
                name="complainant_name"
                id=""
                className={cf.input}
                {...register("complainant_name")}
              />
              <p className={cf.p}>{errors.complainant_name?.message}</p>
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
                    {...register("complainant_gender")}
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
                    {...register("complainant_gender")}
                  />
                  Female
                </label>{" "}
                <label htmlFor="other" className={cf.so}>
                  <input
                    type="radio"
                    name="complainant_gender"
                    id=""
                    value="Other"
                    {...register("complainant_gender")}
                  />
                  Other
                </label>
              </div>
              <p className={cf.p}>{errors.complainant_gender?.message}</p>
              <br />
              <label htmlFor="complainant_con" className={cf.label}>
                Contact No:
              </label>{" "}
              <input
                type="tel"
                name="complainant_no"
                id=""
                className={cf.input}
                {...register("complainant_no")}
              />
              <br />
              <label htmlFor="complainant_email" className={cf.label}>
                Email:
              </label>
              <input
                type="email"
                name="complainant_email"
                id=""
                className={cf.input}
                {...register("complainant_email")}
              />
              <p className={cf.p}>{errors.complainant_email?.message}</p>
              <br />
              <label htmlFor="complainant_address" className={cf.label}>
                Adress:
              </label>
              <input
                type="text"
                name="complainant_address"
                id=""
                className={cf.input}
                {...register("complainant_address")}
              />
              <p className={cf.p}>{errors.complainant_address?.message}</p>
            </div>

            <div className={cf.item} style={props.theme2}>
              <h3 className={cf.h3}>Complainant Type</h3>
              <select
                name="complainant_type"
                id=""
                {...register("complainant_type")}
                className={cf.select}
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
                {...register("typeof_incident")}
                className={cf.select}
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

            <div className={cf.item} style={props.theme2}>
              <h3 className={cf.h3}>Vehicle Information</h3>
              <label htmlFor="vehicle_make" className={cf.label}>
                Make:{" "}
              </label>{" "}
              <input
                type="text"
                name="vehicle_make"
                {...register("vehicle_make")}
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
                {...register("vehicle_model")}
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
                {...register("vehicle_color")}
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
                {...register("registered_no")}
              />
            </div>

            <div className={cf.item} style={props.theme2}>
              <h3 className={cf.h3}>Suspect Info(if Known)</h3>
              <label htmlFor="suspect_name" className={cf.label}>
                Name:{" "}
              </label>
              <input
                type="text"
                name="suspect_name"
                id=""
                className={cf.input}
                {...register("suspect_name")}
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
                {...register("suspect_physic")}
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
                {...register("suspect_clothing")}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme2}>
              <h3 className={cf.h3}>Witness Information</h3>
              <label htmlFor="witness_name" className={cf.label}>
                Name:{" "}
              </label>
              <input
                type="text"
                name="witness_name"
                id=""
                className={cf.input}
                {...register("witness_name")}
              />
              <br />
              <label htmlFor="witness_no" className={cf.label}>
                Contact No:{" "}
              </label>
              <input
                type="text"
                name="witness_no"
                {...register("witness_no")}
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
                {...register("witness_statement")}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme2}>
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
                {...register("evidence_info")}
              ></textarea>
              <br />
              <input
                type="file"
                name="file"
                id={cf.file}
                onChange={(e) => {
                  setEvidence(e.target.files[0]);
                }}
                className={cf.input}
              />
            </div>

            <div className={cf.item} style={props.theme2}>
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
                {...register("injuries")}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme2}>
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
                {...register("incident_description")}
              ></textarea>
              <p className={cf.p1}>{errors.incident_description?.message}</p>
            </div>

            <div className={cf.item} style={props.theme2}>
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
                {...register("comments")}
              ></textarea>
            </div>

            <div className={cf.item} style={props.theme2}>
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
                {...register("complainant_sign")}
                className={cf.input}
              />
              <p className={cf.p}>{errors.complainant_sign?.message}</p>
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
