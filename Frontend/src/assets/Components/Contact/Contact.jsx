import React from "react";
import c from "./Contact.module.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Contact(props) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/settings");
  };
  const handleFront = () => {
    navigate("/feedback");
  };
  return (
    <>
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
            <form action="">
              <label htmlFor="name" className={c.fl}>
                Name:
              </label>
              <input
                type="text"
                name="name"
                id=""
                required
                className={c.input}
              />
              <br />
              <label htmlFor="email" className={c.fl}>
                Email:
              </label>
              <input
                type="email"
                name="email"
                id=""
                required
                className={c.input}
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
                className={c.textarea}
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
    </>
  );
}

export default Contact;
