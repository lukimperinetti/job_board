import React from 'react';
import { Link } from "react-router-dom";
// import { useRef } from "react";

const Login = () => {
  // const boxLoginFormRef = useRef(null);
  // const boxSignupFormRef = useRef(null);
  // const passShowHideRefs = useRef([]);

  // const handleSignupClick = (e) => {
  //   e.preventDefault();
  //   boxLoginFormRef.current.style.transform = "rotateY(180deg)";
  //   boxSignupFormRef.current.style.transform = "rotateY(0deg)";
  // };

  // const handleLoginClick = (e) => {
  //   e.preventDefault();
  //   boxLoginFormRef.current.style.transform = "rotateY(0deg)";
  //   boxSignupFormRef.current.style.transform = "rotateY(-180deg)";
  // };

  // const handlePassShowHideClick = (eye) => {
  //   const parentEl = eye.parentElement;
  //   const passinput = parentEl.querySelector("input");
  //   if (passinput.type === "password") {
  //     passinput.type = "text";
  //     eye.name = "eye-outline";
  //   } else {
  //     passinput.type = "password";
  //     eye.name = "eye-off-outline";
  //   }
  // };
  return (
    <div className="box1">
      <div className="forms form__login" style={{ width: "350px" }}>
        <h2>Login</h2>
        <form className="form1" id="loginForm">
          <div className="log__email log__box">
            <input
              type="email"
              className="login__email input-style"
              placeholder="email@gmail.com"
              id="loginEmail"
              style={{}}
              required
            />
            <ion-icon className="i" name="mail-outline"></ion-icon>
            <small className="form__login-email--error" id="loginEmailErr">
              error message
            </small>
          </div>
          <div className="log__pass log__box">
            <input
              type="password"
              className="login__pass input-style"
              placeholder="Password"
              required
              id="loginPassword"
            />
            <ion-icon className="i" name="lock-closed-outline"></ion-icon>
            <ion-icon className="eye showHide" name="eye-off-outline"></ion-icon>
            <small className="form__login-pass--error" id="loginPassErr">
              error message
            </small>
          </div>
          <div className="log__remember log__box">
            <input
              type="checkbox"
              className="log__remember--input"
              id="loginRemember"
            />
            <label htmlFor="log--remember" style={{ color: "black" }}>Remember me</label>
            <small className="form__login-remember--error" id="loginRememberErr">
              error message
            </small>
          </div>

          <button className="login-btn" type="submit" id="loginSubmit">
            Login Now
          </button>

          <div className="form__text">
            <p style={{ width: "200px" }}>not a member ?</p>
            <Link to="/jobs/signUp">
              <a className="form__sign--up" href="">
                sign up
              </a>
            </Link>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Login;

