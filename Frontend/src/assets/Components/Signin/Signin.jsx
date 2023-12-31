import s from "./Signin.module.css";
import { Close, Mail, Password, Check } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { auth } from "../Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signin(props) {
  // For Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //For showing failure Message
  const [show, setShow] = useState(false);
  // For errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  console.log(auth?.currentUser?.email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });

    // setErrors(validate(email, password));
    // if (
    //   errors.email === "" &&
    //   errors.password === "" &&
    //   errors.usertype === ""
    // ) {
    //
    //     }
    //     .catch((err) => console.log(err));
  };
  const handleHide = () => {
    setShow(false);
  };

  // const validate = (email, password) => {
  //     let error = {};
  //     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  //     //Email validation
  //     if (!email) {
  //       error.email = "Email should not be empty!!";
  //     } else if (!email_pattern.test(email)) {
  //       error.email = "Email is not valid!!";
  //     } else {
  //       error.email = "";
  //     }

  //     //password validation
  //     if (password === "") {
  //       error.password = "Password should not be empty!!";
  //     } else if (!password.test(ipassword)) {
  //       error.password = "Password is not valid!!";
  //     } else if (password.length < 6) {
  //       error.password = "Password must be more than 6 Characters!!";
  //     } else {
  //       error.password = "";
  //     }
  //     return error;
  //   };

  return (
    <>
      {show ? (
        <div className={s.message} style={props.theme1}>
          <h3 className={s.h3}>Failure</h3>
          <Close className={s.success} onClick={handleHide}></Close>
          <span className={s.span}>Incorrect Email or Password</span>
        </div>
      ) : null}

      <form
        action=""
        onSubmit={handleSubmit}
        className={s.form}
        style={props.theme1}
      >
        <div className={s.container} style={props.theme2}>
          <h4 className={s.h4}>Welcome back..!</h4>
          <label htmlFor="email" className={s.label}>
            Enter your Email:
          </label>
          <input
            type="email"
            name="email"
            className={s.input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Mail className={s.icon}></Mail>
          {errors.email && <p className={s.p}> {errors.email}</p>}
          <br />
          <label htmlFor="password" className={s.label}>
            Enter your Password:
          </label>
          <input
            type="password"
            name="password"
            className={s.input}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Password className={s.icon}></Password>
          {errors.password && <p className={s.p}>{errors.password}</p>}
          <br />
          <input
            type="checkbox"
            name="check"
            id={s.check}
            defaultChecked={true}
            required
          />
          <label htmlFor="check" className={s.check}>
            agreed to our terms & conditions.
          </label>
          <br />
          <div className={s.button2}>
            <button type="submit" className={s.but} id={s.b1}>
              Sign in
            </button>
            <Link to="/signup">
              <button type="button" className={s.but} id={s.b2}>
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signin;
