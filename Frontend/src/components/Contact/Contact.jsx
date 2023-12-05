import React, { useState } from "react";
import c from "./Contact.module.css";
import o from "../Officers/Officers.module.css";
import { ArrowBack, ArrowForward, Title } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Contact(props) {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/settings");
  };
  const handleFront = () => {
    navigate("/feedback");
  };
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // From Adding/Submission
  const handleSubmitAdd = async (data) => {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "ContactMessage"), {
        Name: data.Name,
        Email: data.Email,
        Message: data.Message,
      });

      setShow(true);
      setHide(false);
      console.log("Document Written Id: ", docRef.id);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      {show ? (
        <div className={o.full} style={props.theme1}>
          <div className={o.success} style={props.theme}>
            <h3 className={o.h3}>Message Submitted Successfully</h3>
            <p className={c.cp}>Our staff will contact you soon...</p>
            <button className={o.ok} onClick={handleBack}>
              Ok
            </button>
          </div>
        </div>
      ) : null}
      {hide ? (
        <div className={c.whole} style={props.theme1}>
          <ArrowBack
            className={c.back}
            onClick={handleBack}
            style={props.theme1}
          />
          <ArrowForward
            className={c.front}
            onClick={handleFront}
            style={props.theme1}
          />
          <div className={c.container} style={props.theme2}>
            <h2 className={c.h2}>Contact us</h2>
            <div className={c.item1} style={props.theme3}>
              <h4 className={c.h4}>
                If you need to get in touch with us for any reason, please feel
                free to use the following contact methods:
              </h4>
              <label htmlFor="email" className={c.label}>
                Email: <span className={c.span}>idiot63666@gmail.com</span>
              </label>
              <br />
              <label htmlFor="phone" className={c.label}>
                Phone: <span className={c.span}> 6366652685</span>
              </label>
              <br />
              <label htmlFor="address" className={c.label}>
                Address:{" "}
                <span className={c.span}>
                  No 17, Southend circle, Jayanagar, Banglore-501222
                </span>
              </label>
            </div>
            <div className={c.item2} style={props.theme3}>
              <h4 className={c.h4}>
                You can also reach out to us by filling out the contact form
                below:
              </h4>
              <form action="" onSubmit={handleSubmit(handleSubmitAdd)}>
                <label htmlFor="name" className={c.fl}>
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  {...register("Name")}
                  className={c.input}
                  required
                />

                <br />
                <label htmlFor="email" className={c.fl}>
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  {...register("Email")}
                  className={c.input}
                  required
                />

                <br />
                <label htmlFor="message" className={c.fl}>
                  Message:
                </label>
                <br />
                <textarea
                  name="message"
                  id=""
                  cols="45"
                  rows="7"
                  {...register("Message")}
                  className={c.textarea}
                  required
                ></textarea>

                <div className={c.button}>
                  <button type="reset" className={c.b} id={c.b1}>
                    Clear
                  </button>
                  <button type="submit" className={c.b} id={c.b2}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Contact;
