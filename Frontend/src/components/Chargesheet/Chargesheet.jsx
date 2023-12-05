import cs from "./Chargesheet.module.css";
import React, { useState } from "react";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from "../Images/ab.jpg";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Chargesheet(props) {
  //Hiding the chargesheet
  const [hide, setHide] = useState(true);
  //Showing Success message
  const [success, setSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [evidence, setEvidence] = useState(null);
  //State for controlling user inputs
  const schema = yup.object().shape({
    complaint_no: yup.string().required("Name is required"),
    complaint_time: yup.string().required("Time is required"),
    complaint_date: yup.string().required("Date is required"),
    incident_time: yup.string().required("Time is required"),
    incident_date: yup.string().required("Date is required"),
    incident_type: yup.string().required("Type is required"),
    incident_loc: yup.string().required("Loaction is required"),
    complainant_name: yup.string().required("Name is required"),
    complainant_details: yup
      .string()
      .required("Complainant Details are required"),
    accuse_name: yup.string().required("Name is required"),
    accuse_details: yup.string().required("Accuse details are required"),
    incident_summary: yup.string().required("Incident summary is required"),
    evidence_info: yup.string().required("Evidence info is required"),
    witness_name: yup.string().required("Name is required"),
    witness_no: yup.string().min(10).max(10).required(),
    witness_statement: yup.string().required("Witness statement required"),
    officer_name: yup.string().required("Name is  required"),
    officer_id: yup.string().required("ID is required"),
    officer_no: yup.string().min(10).max(10).required(),
    charge_details: yup.string().required("Charges details are required"),
    recommendation_details: yup
      .string()
      .required("Recommendation details are required"),
    officer_sign: yup.string().required("Officer sign is required"),
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
    if (image == null) return;
    const imageRef = ref(storage, `criminal/${data.complaint_no}`);
    if (evidence == null) return;
    const evidenceRef = ref(storage, `evidence/${data.complaint_no}`);
    try {
      await uploadBytes(imageRef, image).then((res) => {
        console.log("Image Uploaded Succeesfully");
      }),
        await getDownloadURL(imageRef).then((url) => {
          globalThis.criminalPhoto = url;
          console.log(criminalPhoto);
        });
      await uploadBytes(evidenceRef, evidence).then((res) => {
        console.log("Image Uploaded Succeesfully");
      }),
        getDownloadURL(imageRef).then((url) => {
          globalThis.chargesheetEvidence = url;
          console.log(chargesheetEvidence);
        });
      const docRef = await addDoc(collection(db, "Chargesheet"), {
        complaint_no: data.complaint_no,
        complaint_time: data.complaint_time,
        complaint_date: data.complaint_date,
        incident_time: data.incident_time,
        incident_date: data.incident_date,
        incident_type: data.incident_type,
        incident_loc: data.incident_loc,
        complainant_name: data.complainant_name,
        complainant_details: data.complainant_details,
        accuse_name: data.accuse_name,
        accuse_details: data.accuse_details,
        incident_summary: data.incident_summary,
        evidence_info: data.evidence_info,
        witness_name: data.witness_name,
        witness_no: data.witness_no,
        witness_statement: data.witness_statement,
        officer_name: data.officer_name,
        officer_id: data.officer_id,
        officer_no: data.officer_no,
        charge_details: data.charge_details,
        recommendation_details: data.recommendation_details,
        officer_sign: data.officer_sign,
        chargesheetEvidenceFile: chargesheetEvidence,
        accusePhoto: criminalPhoto,
      });

      setHide(false);
      setSuccess(true);

      console.log("Document Written Id: ", docRef.id);
    } catch (e) {
      console.error(e);
    }
  };

  const navigate = useNavigate();

  //Fuction to go back
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      {success ? (
        <div className={cs.full} style={props.theme1}>
          <div className={cs.success} style={props.theme}>
            <h1 className={cs.s}>Success</h1>
            <Check className={cs.c} sx={{ fontSize: 30 }}></Check>
            <button type="button" onClick={handleClick} className={cs.bu}>
              Continue
            </button>
          </div>
        </div>
      ) : null}
      {hide ? (
        <form
          action=""
          onSubmit={handleSubmit(handleSubmitAdd)}
          className={cs.form}
          style={props.theme1}
        >
          <h1 className={cs.h1}>Chargesheet</h1>
          <h5 className={cs.h5} style={props.theme1}>
            (Under Section 173 CR. P.C.)
          </h5>
          <div className={cs.container}>
            <div className={cs.item} style={props.theme2}>
              <h2 className={cs.h2}>Criminal photo</h2>
              <img src={image} alt="" className={cs.img} />
              <input
                type="file"
                name="file"
                id=""
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Complaint Info</h3>
              <label htmlFor="complaint_no" className={cs.label}>
                Complaint No:
              </label>
              <input
                type="text"
                name="complaint_no"
                id=""
                className={cs.input}
                {...register("complaint_no")}
              />
              <p className={cs.p}>{errors.complaint_no?.message}</p>
              <br />
              <label htmlFor="complaint_time" className={cs.label}>
                Complaint Time:{" "}
              </label>
              <input
                type="text"
                name="complaint_time"
                id=""
                {...register("complaint_time")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.complaint_time?.message}</p>
              <br />
              <label htmlFor="complaint_date" className={cs.label}>
                Complaint Date:{" "}
              </label>{" "}
              <input
                type="date"
                name="complaint_date"
                id=""
                {...register("complaint_date")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.complaint_date?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Incident Info</h3>
              <label htmlFor="incident_time" className={cs.label}>
                Incident Time:{" "}
              </label>{" "}
              <input
                type="text"
                name="incident_time"
                id=""
                {...register("incident_time")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.incident_time?.message}</p>
              <br />
              <label htmlFor="incident_date" className={cs.label}>
                Incident Date:{" "}
              </label>
              <input
                type="date"
                name="incident_date"
                id=""
                {...register("incident_date")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.incident_date?.message}</p>
              <br />
              <label htmlFor="incident_type" className={cs.label}>
                Incident Type:{" "}
              </label>
              <input
                type="text"
                name="incident_type"
                id=""
                {...register("incident_type")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.incident_type?.message}</p>
              <br />
              <label htmlFor="incident_loc" className={cs.label}>
                Incident Location:{" "}
              </label>
              <input
                type="text"
                name="incident_loc"
                id=""
                {...register("incident_loc")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.incident_loc?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Complainant Details</h3>
              <label htmlFor="complainant_name" className={cs.label}>
                Complainant Name:{" "}
              </label>
              <input
                type="text"
                name="complainant_name"
                id=""
                {...register("complainant_name")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.complainant_name?.message}</p>
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
                {...register("complainant_details")}
              ></textarea>
              <p className={cs.p1}>{errors.complainant_details?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Accuse Details</h3>
              <label htmlFor="accuse_name" className={cs.label}>
                Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="accuse_name"
                id=""
                {...register("accuse_name")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.accuse_name?.message}</p>
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
                {...register("accuse_details")}
              ></textarea>
              <p className={cs.p1}>{errors.accuse_details?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Summary of the Offense</h3>
              <textarea
                name="incident_summary"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                {...register("incident_summary")}
              ></textarea>
              <p className={cs.p1}>{errors.incident_summary?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Evidence Info</h3>
              <textarea
                name="evidence_info"
                id=""
                cols="45"
                rows="7"
                className={cs.textarea}
                {...register("evidence_info")}
              ></textarea>
              <p className={cs.p1}>{errors.evidence_info?.message}</p>
              <br />
              <input
                type="file"
                name="evidence_file"
                id={cs.file}
                onChange={(e) => {
                  setEvidence(e.target.files[0]);
                }}
              />
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Witness Info</h3>
              <label htmlFor="witness_name" className={cs.label}>
                Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="witness_name"
                id=""
                {...register("witness_name")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.witness_name?.message}</p>
              <br />
              <label htmlFor="witness_no" className={cs.label}>
                Contact No:{" "}
              </label>
              <input
                type="tel"
                name="witness_no"
                id=""
                {...register("witness_no")}
                className={cs.input}
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
                {...register("witness_statement")}
              ></textarea>
              <p className={cs.p1}>{errors.witness_statement?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
              <h3 className={cs.h3}>Investing officer</h3>
              <label htmlFor="officer_name" className={cs.label}>
                Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="officer_name"
                id=""
                {...register("officer_name")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.officer_name?.message}</p>
              <br />
              <label htmlFor="officer_id" className={cs.label}>
                Badge/Id No:{" "}
              </label>
              <input
                type="text"
                name="officer_id"
                id=""
                {...register("officer_id")}
                className={cs.input}
              />
              <p className={cs.p}>{errors.officer_id?.message}</p>
              <br />
              <label htmlFor="officer_no" className={cs.label}>
                Contact No:{" "}
              </label>{" "}
              <input
                type="tel"
                name="officer_no"
                id=""
                {...register("officer_no")}
                className={cs.input}
              />
              <br />
            </div>
            <div className={cs.item} style={props.theme2}>
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
                {...register("charge_details")}
              ></textarea>
              <p className={cs.p1}>{errors.charge_details?.message}</p>
            </div>
            <div className={cs.item} style={props.theme2}>
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
                {...register("recommendation_details")}
              ></textarea>
              <p className={cs.p1}>{errors.recommendation_details?.message}</p>
              <h4 className={cs.h4}>Filling Officer's Signature</h4>
              <input
                type="text"
                name="officer_sign"
                id={cs.fs}
                {...register("officer_sign")}
              />
              <p className={cs.p1}>{errors.officer_sign?.message}</p>
            </div>
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
