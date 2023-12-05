import React, { useState } from "react";
import f from "./Feedback.module.css";
import o from "../Officers/Officers.module.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Check } from "@mui/icons-material";
import { auth, db, storage } from "../Config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ref, uploadBytes } from "firebase/storage";

function Feedback(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [evidence, setEvidence] = useState(null);

  const handleBack = () => {
    navigate("/settings");
  };
  const handleFront = () => {
    navigate("/dashboard");
  };
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Phone: yup.string().min(10).max(10).required(),
    Category: yup.string().required("Please choose the category"),
    Message: yup.string().required("Please enter your message"),
    Rate: yup.string().required("Please choose the importance level"),
    likeContact: yup.string().required("Please select to continue"),
    Comments: yup.string(),
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
    if (evidence == null) return;
    const evidenceRef = ref(storage, `feedbackevidence/${data.Name}`);
    try {
      const docRef = await addDoc(collection(db, "Feedback"), {
        Name: data.Name,
        Email: data.Email,
        Phone: data.Phone,
        Category: data.Category,
        Message: data.Message,
        Rate: data.Rate,
        likeContact: data.likeContact,
        Comments: data.Comments,
      });
      uploadBytes(evidenceRef, evidence).then((res) => {
        console.log("Image Uploaded Succeesfully");
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
            <h3 className={o.h3}>Feedback Submitted Successfully</h3>
            <button className={o.ok} onClick={handleBack}>
              Ok
            </button>
          </div>
        </div>
      ) : null}
      {hide ? (
        <div className={f.whole} style={props.theme1}>
          <ArrowBack
            className={f.back}
            style={props.theme1}
            onClick={handleBack}
          />
          <ArrowForward
            className={f.front}
            style={props.theme1}
            onClick={handleFront}
          />
          <div className={f.container} style={props.theme2}>
            <h1 className={f.h1}>Feedback us</h1>
            <p className={f.p} id={f.p}>
              Your feedback is invaluable to us as we strive to improve our
              Crime Reporting Management System and enhance community safety.
              please take a moment to share your thoughts and suggestions.
            </p>
            <h2 className={f.h2} id={f.h2}>
              Contact Information(optional):
            </h2>
            <form
              action=""
              className={f.form}
              onSubmit={handleSubmit(handleSubmitAdd)}
            >
              <label htmlFor="name" className={f.label}>
                Name:
              </label>
              <input
                type="text"
                name="name"
                className={f.input}
                {...register("Name")}
              />
              <p className={f.p1}>{errors.Name?.message}</p>
              <br />
              <label htmlFor="email" className={f.label}>
                Email:
              </label>
              <input
                type="email"
                name="email"
                id=""
                className={f.input}
                {...register("Email")}
              />
              <p className={f.p1}>{errors.Email?.message}</p>
              <br />
              <label htmlFor="phone" className={f.label}>
                Phone No:
              </label>
              <input
                type="tel"
                name="phone"
                id=""
                className={f.input}
                {...register("Phone")}
              />
              <h2 className={f.h2}>Feedback Category:</h2>
              <h5 className={f.ps}>
                Please select the category that best fits your feedback:
              </h5>
              <label htmlFor="feedback" className={f.cat}>
                <input
                  type="radio"
                  name="category"
                  id={f.i1}
                  {...register("Category")}
                />
                <h4 className={f.h4}>General Feedback:</h4>
                Share your overall impressions, suggestions, or comments about
                the system.
              </label>
              <label htmlFor="feedback" className={f.cat}>
                <input
                  type="radio"
                  name="category"
                  id={f.i1}
                  {...register("Category")}
                />
                <h4 className={f.h4}>Bug Report:</h4>
                Report any technical issues, errors, or glitches you've
                encountered.
              </label>
              <label htmlFor="feedback" className={f.cat}>
                <input
                  type="radio"
                  name="category"
                  id={f.i1}
                  {...register("Category")}
                />
                <h4 className={f.h4}>Feature Request:</h4>
                Propose new features or improvements you'd like to see.
              </label>
              <label htmlFor="feedback" className={f.cat}>
                <input
                  type="radio"
                  name="category"
                  id={f.i1}
                  {...register("Category")}
                />
                <h4 className={f.h4}>Use Experience:</h4>
                Tell us about your experience using the system, including
                usability, design, and accessibility.
              </label>
              <p className={f.p2}>{errors.Category?.message}</p>
              <h2 className={f.h2}>Your Message:</h2>
              <h5 className={f.ps}>
                Please provide a detailed description of your feedback. The more
                information you provide, the better we can understand and
                address your concerns or ideas:
              </h5>
              <textarea
                name="message"
                id=""
                cols="53"
                rows="10"
                className={f.textarea}
                {...register("Message")}
              ></textarea>
              <p className={f.p2}>{errors.Message?.message}</p>
              <h2 className={f.h2}>Importance Level:</h2>
              <h5 className={f.ps}>
                Please rate the importance of your feedback on a scale of 1 to
                5, with 1 being the least important and 5 being the most
                important
              </h5>
              <label htmlFor="rate" className={f.cat}>
                <input
                  type="radio"
                  name="rate"
                  id={f.i1}
                  {...register("Category")}
                />
                <h4 className={f.h4}>1-</h4>
                Not Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input
                  type="radio"
                  name="rate"
                  id={f.i1}
                  {...register("Rate")}
                />
                <h4 className={f.h4}>2-</h4>
                Slightly Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input
                  type="radio"
                  name="rate"
                  id={f.i1}
                  {...register("Rate")}
                />
                <h4 className={f.h4}>3-</h4>
                Moderate Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input
                  type="radio"
                  name="rate"
                  id={f.i1}
                  {...register("Rate")}
                />
                <h4 className={f.h4}>4-</h4>
                Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input
                  type="radio"
                  name="rate"
                  id={f.i1}
                  {...register("Rate")}
                />
                <h4 className={f.h4}>5-</h4>
                Very Important
              </label>
              <p className={f.p2}>{errors.Rate?.message}</p>
              <h2 className={f.h2}>Attachments(if applicable):</h2>
              <h5 className={f.ps}>
                If you have any screenshots, documents, or other files related
                to your feedback, please attach them here.:
              </h5>
              <input
                type="file"
                name=""
                id={f.i2}
                onChange={(e) => {
                  setEvidence(e.target.files[0]);
                }}
              />
              <h2 className={f.h2}>
                Would you like us to contact you regarding your feedback?
              </h2>
              <label htmlFor="contact" className={f.cat}>
                <input
                  type="radio"
                  name="likeContact"
                  id={f.i1}
                  {...register("likeContact")}
                />
                Yes, I'd like a response.
              </label>
              <label htmlFor="contact" className={f.cat}>
                <input
                  type="radio"
                  name="likeContact"
                  id={f.i1}
                  {...register("likeContact")}
                />
                No response needed, I'm just providing feedback.
              </label>
              <p className={f.p2}>{errors.likeContact?.message}</p>

              <h2 className={f.h2}>Consent: </h2>
              <label htmlFor="consent" className={f.cat}>
                <input
                  type="checkbox"
                  name="consent"
                  id={f.i1}
                  defaultChecked={true}
                />
                I consent to the use of my feedback for the improvement of the
                Crime Reporting Management System, and I understand that my
                personal information will be handled in acccordance with our
                privacy policy.
              </label>
              <h2 className={f.h2}>Additional Comments(optional): </h2>
              <p className={f.p}>
                Is there anything else you'd like to add or any specific
                suggestions for improvement?
              </p>
              <textarea
                name="comments"
                id=""
                cols="53"
                rows="10"
                className={f.textarea}
                {...register("Comments")}
              ></textarea>
              <p className={f.p}>
                Thank you for taking the time to help us enhance our Crime
                Reporting Management System. Your feedback is crucial in our
                efforts to provide a safer and more effective service for our
                community. We will do our best to address your feedback promptly
                and appropriately.
              </p>
              <div className={f.but}>
                <button type="reset" className={f.button} id={f.reset}>
                  Reset
                </button>
                <button type="submit" className={f.button} id={f.submit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Feedback;
