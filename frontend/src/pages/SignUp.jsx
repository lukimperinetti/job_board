import React from 'react';
import { Link } from "react-router-dom";

const SignUP = () => {
    return (
        <div className="box2">
            <div className="forms form__login" style={{ width: "450px" }}>
                <h2>Sign up</h2>

                <form className="form2" id="signupForm" style={{ height: "400px" }}>
                    <div className="log__firstname log__box">
                        <input
                            type="text"
                            className="signup__name input-style"
                            placeholder="First name"
                            required
                            id="Username"
                        />
                        <ion-icon className="i" name="person-outline"></ion-icon>
                    </div>
                    <div className="log__lastname log__box">
                        <input
                            type="text"
                            className="signup__name input-style"
                            placeholder="Last name"
                            required
                            id="Username"
                        />
                        <ion-icon className="i" name="person-outline"></ion-icon>
                    </div>
                    <div className="log__email log__box">
                        <input
                            type="email"
                            className="signup__email log__email--reg input-style"
                            placeholder="Email Address"
                            required
                            id="signupEmail"
                        />
                        <ion-icon className="i" name="mail-outline"></ion-icon>
                    </div>
                    <div className="log__pass log__box">
                        <input
                            type="password"
                            className="signup__pass input-style"
                            placeholder="Password"
                            required
                            id="signupPassword"
                        />
                        <ion-icon className="i" name="lock-closed-outline"></ion-icon>
                    </div>
                    <div className="log__pass log__box">
                        <input
                            type="password"
                            className="signup__confirm log__confirm--reg input-style"
                            placeholder="Confirm Password"
                            required
                            id="signupConfirmPassword"
                        />
                        <ion-icon className="i" name="lock-closed-outline"></ion-icon>
                        <ion-icon className="eye showHide" name="eye-off-outline"></ion-icon>
                    </div>
                    <div className="log__remember log__box">
                        <input
                            type="checkbox"
                            className="log__accept--input"
                            id="terms"
                        />
                        <label htmlFor="log--accept" style={{ color: "black" }}>I Accept the terms & conditions</label>
                    </div>

                    <button className="reg-btn" type="submit" id="signupBtn">
                        Register Now
                    </button>

                    <div className="form__text">
                        <p style={{ width: "300px" }}>already have an Account ?</p>
                        <Link to="/jobs/login">
                            <a className="form__login--link">
                                Login Now
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUP;