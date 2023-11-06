const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crmsdb",
});

app.post("/signin", (req, res) => {
  const sql =
    "SELECT * FROM signup WHERE `email`= ? AND `password` = ? AND `usertype`=? ";
  const email = req.body.email;
  const password = req.body.password;
  const usertype = req.body.usertype;
  db.query(sql, [email, password, usertype], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      console.log("Successfull");
      return res.json("Success");
    } else {
      console.log("Failed");
      return res.json("Fail");
    }
  });
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO signup (`username`,`phonenumber`,`email`,`password`,`usertype`) Values (?)";
  const values = [
    req.body.username,
    req.body.phonenumber,
    req.body.email,
    req.body.password,
    req.body.usertype,
  ];
  console.log(values);
  db.query(sql, [values], (err, data) => {
    if (err) throw err;
    return console.log("Inserted Successfully"), res.json(data);
  });
});

app.post("/newfir", (req, res) => {
  const sql =
    "INSERT INTO fir (`complaint_date`,`complaint_time`,`complaint_no`,`incident_date`,`incident_time`,`incident_loc`,`complainant_name`,`complainant_gender`,`complainant_no`,`complainant_email`,`complainant_address`,`complainant_type`,`typeof_incident`,`vehicle_make`,`vehicle_model`,`vehicle_color`,`registered_no`,`suspect_name`,`suspect_physic`,`suspect_clothing`,`witness_name`,`witness_no`,`witness_statement`,`evidence_info`,`injuries`,`incident_description`,`comments`,`complainant_sign`) Values (?)";
  const values = [
    req.body.complaint_date,
    req.body.complaint_time,
    req.body.complaint_no,
    req.body.incident_date,
    req.body.incident_time,
    req.body.incident_loc,
    req.body.complainant_name,
    req.body.complainant_gender,
    req.body.complainant_no,
    req.body.complainant_email,
    req.body.complainant_address,
    req.body.complainant_type,
    req.body.typeof_incident,
    req.body.vehicle_make,
    req.body.vehicle_model,
    req.body.vehicle_color,
    req.body.registered_no,
    req.body.suspect_name,
    req.body.suspect_physic,
    req.body.suspect_clothing,
    req.body.witness_name,
    req.body.witness_no,
    req.body.witness_statement,
    req.body.evidence_info,
    req.body.injuries,
    req.body.incident_description,
    req.body.comments,
    req.body.complainant_sign,
  ];
  console.log(values);
  db.query(sql, [values], (err, data) => {
    if (err) throw err;
    return console.log("Inserted Successfully"), res.json(data);
  });
});

app.post("/chargesheet", (req, res) => {
  const sql =
    "INSERT INTO chargesheet (`complaint_no`,`complaint_time`, `complaint_date`, `incident_time`, `incident_date`, `incident_type`, `incident_loc`, `complainant_name`, `complainant_details`, `accuse_name`, `accuse_details`, `incident_summary`, `evidence_info`, `witness_name`, `witness_no`, `witness_statement`, `officer_name`, `officer_id`, `officer_no`, `charge_details`, `recommendation_details`, `officer_sign` ) Values(?)";
  const values = [
    req.body.complaint_no,
    req.body.complaint_time,
    req.body.complaint_date,
    req.body.incident_time,
    req.body.incident_date,
    req.body.incident_type,
    req.body.incident_loc,
    req.body.complainant_name,
    req.body.complainant_details,
    req.body.accuse_name,
    req.body.accuse_details,
    req.body.incident_summary,
    req.body.evidence_info,
    req.body.witness_name,
    req.body.witness_no,
    req.body.witness_statement,
    req.body.officer_name,
    req.body.officer_id,
    req.body.officer_no,
    req.body.charge_details,
    req.body.recommendation_details,
    req.body.officer_sign,
  ];
  console.log(values);
  db.query(sql, [values], (err, data) => {
    if (err) throw err;
    return console.log("Inserted Successfully"), res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening....");
});
