import React, { useState } from "react";
import f from "./Feedback.module.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Check } from "@mui/icons-material";

function Feedback(props) {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);

  const handleBack = () => {
    navigate("/settings");
  };
  const handleFront = () => {
    navigate("/dashboard");
  };
  const handleClick = () => {
    navigate("/dashboard");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setHide(true);
  };

  return (
    <>
      {hide ? (
        <div className={f.message} style={props.theme}>
          <h3 className={f.h3}>
            Feedback Submitted <Check className={f.check} />
          </h3>
          <button type="button" className={f.b1} onClick={handleClick}>
            Ok
          </button>
        </div>
      ) : null}
      {hide ? null : (
        <div className={f.whole} style={props.themeSettings}>
          <ArrowBack
            className={f.back}
            style={props.theme}
            onClick={handleBack}
          />
          <ArrowForward
            className={f.front}
            style={props.theme}
            onClick={handleFront}
          />
          <div className={f.container} style={props.theme}>
            <h1 className={f.h1}>Feedback us</h1>
            <p className={f.p} id={f.p}>
              Your feedback is invaluable to us as we strive to improve our
              Crime Reporting Management System and enhance community safety.
              please take a moment to share your thoughts and suggestions.
            </p>
            <h2 className={f.h2} id={f.h2}>
              Contact Information(optional):
            </h2>
            <form action="" className={f.form} onSubmit={handleSubmit}>
              <label htmlFor="name" className={f.label}>
                Name:
              </label>
              <input type="text" name="name" className={f.input} />
              <br />
              <label htmlFor="email" className={f.label}>
                Email:
              </label>
              <input type="email" name="email" id="" className={f.input} />
              <br />
              <label htmlFor="phone" className={f.label}>
                Phone No:
              </label>
              <input type="tel" name="phone" id="" className={f.input} />
              <h2 className={f.h2}>Feedback Category:</h2>
              <h5 className={f.ps}>
                Please select the category that best fits your feedback:
              </h5>
              <label htmlFor="feedback" className={f.cat}>
                <input type="radio" name="category" id={f.i1} />
                <h4 className={f.h4}>General Feedback:</h4>
                Share your overall impressions, suggestions, or comments about
                the system.
              </label>
              <label htmlFor="feedback" className={f.cat}>
                <input type="radio" name="category" id={f.i1} />
                <h4 className={f.h4}>Bug Report:</h4>
                Report any technical issues, errors, or glitches you've
                encountered.
              </label>
              <label htmlFor="feedback" className={f.cat}>
                <input type="radio" name="category" id={f.i1} />
                <h4 className={f.h4}>Feature Request:</h4>
                Propose new features or improvements you'd like to see.
              </label>
              <label htmlFor="feedback" className={f.cat}>
                <input type="radio" name="category" id={f.i1} />
                <h4 className={f.h4}>Use Experience:</h4>
                Tell us about your experience using the system, including
                usability, design, and accessibility.
              </label>
              <h2 className={f.h2}>Your Message:</h2>
              <h5 className={f.ps}>
                Please provide a detailed description of your feedback. The more
                information you provide, the better we can understand and
                address your concerns or ideas:
              </h5>
              <textarea
                name="message"
                id=""
                cols="60"
                rows="10"
                className={f.textarea}
              ></textarea>
              <h2 className={f.h2}>Importance Level:</h2>
              <h5 className={f.ps}>
                Please rate the importance of your feedback on a scale of 1 to
                5, with 1 being the least important and 5 being the most
                important
              </h5>
              <label htmlFor="rate" className={f.cat}>
                <input type="radio" name="rate" id={f.i1} />
                <h4 className={f.h4}>1-</h4>
                Not Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input type="radio" name="rate" id={f.i1} />
                <h4 className={f.h4}>2-</h4>
                Slightly Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input type="radio" name="rate" id={f.i1} />
                <h4 className={f.h4}>3-</h4>
                Moderate Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input type="radio" name="rate" id={f.i1} />
                <h4 className={f.h4}>4-</h4>
                Important
              </label>
              <label htmlFor="rate" className={f.cat}>
                <input type="radio" name="rate" id={f.i1} />
                <h4 className={f.h4}>5-</h4>
                Very Important
              </label>
              <h2 className={f.h2}>Attachments(if applicable):</h2>
              <h5 className={f.ps}>
                If you have any screenshots, documents, or other files related
                to your feedback, please attach them here.:
              </h5>
              <input type="file" name="" id={f.i2} />
              <h2 className={f.h2}>
                Would you like us to conatact you regarding your feedback?
              </h2>
              <label htmlFor="contact" className={f.cat}>
                <input type="radio" name="contact" id={f.i1} />
                Yes, I'd like a response.
              </label>
              <label htmlFor="contact" className={f.cat}>
                <input type="radio" name="contact" id={f.i1} />
                No response needed, I'm just providing feedback.
              </label>
              <h5 className={f.ps}>
                If you'd like a response, please select your preffered contact
                method:
              </h5>
              <label htmlFor="response" className={f.cat}>
                <input type="radio" name="response" id={f.i1} />
                Email
              </label>
              <label htmlFor="response" className={f.cat}>
                <input type="radio" name="response" id={f.i1} />
                Phone
              </label>
              <h2 className={f.h2}>Consent: </h2>
              <label htmlFor="consent" className={f.cat}>
                <input type="checkbox" name="consent" id={f.i1} />I consent to
                the use of my feedback for the improvement of the Crime
                Reporting Management System, and I understand that my personal
                information will be handled in acccordance with our privacy
                policy.
              </label>
              <h2 className={f.h2}>Additional Comments(optional): </h2>
              <p className={f.p}>
                Is there anything else you'd like to add or any specific
                suggestions for improvement?
              </p>
              <textarea
                name="comments"
                id=""
                cols="60"
                rows="10"
                className={f.textarea}
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
      )}
    </>
  );
}

export default Feedback;
