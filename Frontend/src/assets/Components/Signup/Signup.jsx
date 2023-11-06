import sign from "./Signup.module.css";
import { Person, Call, Email, Password } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const [inputs, setInputs] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    usertype: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(inputs));
    if (
      errors.username === "" &&
      errors.phonenumber === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.usertype === ""
    ) {
      axios
        .post("http://localhost:8081/signup", inputs)
        .then((res) => {
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  };

  function Validation(inputs) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    // name validation
    if (!inputs.username) {
      error.username = "Name should not be not empty!!";
    } else if (inputs.username.length < 5) {
      error.username = "Name should be more than 5 characters!!";
    } else {
      error.username = "";
    }

    //phone number validation
    if (!inputs.phonenumber) {
      error.phonenumber = "Phone No should not be empty!!";
    } else if (
      inputs.phonenumber.length < 10 ||
      inputs.phonenumber.length > 10
    ) {
      error.phonenumber = "Phone No is not valid!!";
    } else {
      error.phonenumber = "";
    }

    //email validtion
    if (!inputs.email) {
      error.email = "Email is should not be empty!!";
    } else if (!email_pattern.test(inputs.email)) {
      error.email = "Email is not valid!!";
    } else {
      error.email = "";
    }

    //password validation
    if (inputs.password === "") {
      error.password = "Password should not be empty!!";
    } else if (!password.test(inputs.password)) {
      error.password = "Password is not valid!!";
    } else if (inputs.password.length < 6) {
      error.password = "Password must be more than 6 Characters!!";
    } else {
      error.password = "";
    }

    //usertype Validation
    if (!inputs.usertype) {
      error.usertype = "Please Select account type!!";
    } else {
      error.usertype = "";
    }
    return error;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={sign.form}
        style={props.themeSettings}
      >
        <div className={sign.container} style={props.theme}>
          <h2 className={sign.h2}>Choose an account type</h2>
          <div className={sign.user}>
            <button
              type="button"
              value="police"
              name="usertype"
              id={sign.police}
              className={sign.button}
              onClick={handleInput}
              style={props.themeSettings}
            >
              Police
            </button>
            <h2 className={sign.or}>OR</h2>
            <button
              type="button"
              value="public"
              name="usertype"
              id={sign.public}
              className={sign.button}
              onClick={handleInput}
              style={props.themeSettings}
            >
              Public
            </button>
          </div>
          {errors.usertype === "" ? null : (
            <p className={sign.p} id={sign.p}>
              {errors.usertype}
            </p>
          )}
          <h4 className={sign.h4}>
            Hello, please fill out the below form to get started.
          </h4>
          <label htmlFor="username" className={sign.label}>
            Enter your Name:
          </label>
          <input
            type="text"
            name="username"
            className={sign.input}
            onChange={handleInput}
          />
          <Person className={sign.icons}></Person>
          {errors.name === "" ? null : (
            <p className={sign.p}>{errors.username}</p>
          )}
          <br />
          <label htmlFor="phonenumber" className={sign.label}>
            Enter your Number:
          </label>
          <input
            type="tel"
            name="phonenumber"
            className={sign.input}
            onChange={handleInput}
          />
          <Call className={sign.icons}></Call>
          {errors.phonenumber === "" ? null : (
            <p className={sign.p}>{errors.phonenumber}</p>
          )}
          <br />
          <label htmlFor="email" className={sign.label}>
            Enter your Email:
          </label>
          <input
            type="email"
            name="email"
            className={sign.input}
            onChange={handleInput}
          />{" "}
          <Email className={sign.icons}></Email>
          {errors.email === "" ? null : (
            <p className={sign.p}>{errors.email}</p>
          )}
          <br />
          <label htmlFor="password" className={sign.label}>
            Enter your Password:
          </label>
          <input
            type="password"
            name="password"
            className={sign.input}
            onChange={handleInput}
          />{" "}
          <Password className={sign.icons}></Password>
          {errors.password === "" ? null : (
            <p className={sign.p}>{errors.password}</p>
          )}
          <div className={sign.button2}>
            <button
              type="submit"
              value="signup"
              className={sign.but}
              id={sign.b1}
            >
              sign up
            </button>
            <span className={sign.span}>Already have an account?</span>
            <Link to="/signin">
              <button
                type="button"
                value="signin"
                className={sign.but}
                id={sign.b2}
              >
                sign in
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
