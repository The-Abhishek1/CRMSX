import React, { useEffect, useState } from "react";
import sc from "./showChargesheet.module.css";
import { ArrowBack } from "@mui/icons-material";
import { auth, db, storage } from "../Config/Firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
function ShowChargesheet({
  theme,
  theme1,
  theme2,
  theme_2,
  themeIcons,
  search,
}) {
  // State for maintaining Chargeheet Details
  const [chargesheet, setChargesheet] = useState([]);
  const chargesheetCollectionRef = collection(db, "Chargesheet");
  const [found, setFound] = useState(true);
  useEffect(() => {
    const getOfficers = async () => {
      const data = await getDocs(chargesheetCollectionRef);
      setChargesheet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(chargesheet);
    };
    getOfficers();
  });
  const location = useLocation();
  const ID = location.state.complaintNo;
  console.log(ID);
  return (
    <>
      <div className={sc.full} style={theme1}>
        <div className={sc.half}>
          {chargesheet
            .filter((charge) => charge.complaint_no == ID)
            .map((charge) => {
              return (
                <>
                  <h1 className={sc.h1}>
                    Complaint No : {charge.complaint_no}
                  </h1>

                  <div className={sc.card} style={theme1}>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Complaint Details</h3>
                      <label htmlFor="compalint_no">
                        Comaplaint No:{" "}
                        <p className={sc.p}>{charge.complaint_no}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Complaint Time:{" "}
                        <p className={sc.p}>{charge.complaint_time}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Compaint Date:{" "}
                        <p className={sc.p}>{charge.complaint_date}</p>
                      </label>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Incident Details</h3>
                      <label htmlFor="">
                        Incident Time:{" "}
                        <p className={sc.p}>{charge.incident_time}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Incident Date:{" "}
                        <p className={sc.p}>{charge.incident_date}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Incidate Type:{" "}
                        <p className={sc.p}>{charge.incident_type}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Incident Location:{" "}
                        <p className={sc.p}>{charge.incident_loc}</p>
                      </label>
                      <br />
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Accuse Details</h3>

                      <img src={charge.accusePhoto} alt="" className={sc.img} />
                      <br />
                      <label htmlFor="">
                        Accuse Name: <h4>{charge.accuse_name}</h4>
                      </label>

                      <label htmlFor="">
                        Accuse Details:{" "}
                        <p className={sc.p}>{charge.accuse_details}</p>
                      </label>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Complainant Details</h3>
                      <label htmlFor="">
                        Compalainant Name:
                        <p className={sc.p}>{charge.complainant_name}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Compalainant Details:
                        <p className={sc.p}>{charge.complainant_details}</p>
                      </label>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Witness Details</h3>
                      <label htmlFor="">
                        Witness Name:
                        <p className={sc.p}>{charge.witness_name}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Witness No:
                        <p className={sc.p}>{charge.witness_no}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Witness Statement:
                        <p className={sc.p}>{charge.witness_statement}</p>
                      </label>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Officer Details</h3>
                      <label htmlFor="">
                        Officer Name:
                        <p className={sc.p}>{charge.officer_name}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Officer ID:
                        <p className={sc.p}>{charge.officer_id}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Officer No:
                        <p className={sc.p}>{charge.officer_no}</p>
                      </label>
                      <br />
                      <label htmlFor="">
                        Officer Sign:
                        <p className={sc.p}>{charge.officer_sign}</p>
                      </label>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Incident Summary</h3>
                      <p className={sc.p}>{charge.incident_summary}</p>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Evidence Details</h3>
                      <p className={sc.p}>{charge.evidence_info}</p>
                      <img src={charge.chargesheetEvidenceFile} alt="" />
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Charge Details</h3>
                      <p className={sc.p}>{charge.charge_details}</p>
                    </div>
                    <div className={sc.cards} style={theme2}>
                      <h3 className={sc.h3}>Recommendation</h3>
                      <p className={sc.p}>{charge.recommendation_details}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ShowChargesheet;
