import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUP = () => {
  const [formData, setFormData] = useState({
    UserFirstname: "",
    UserLastname: "",
    signupEmail: "",
    signupPassword: "",
    signupConfirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "signupPassword" || name === "signupConfirmPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.signupPassword !== formData.signupConfirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas");
    } else {
      // Données à envoyer à l'API
      const data = {
        firstname: formData.UserFirstname, 
        lastname: formData.UserLastname,
        email: formData.signupEmail,
        password: formData.signupPassword,
      };

      // Effectuer une requête Axios pour poster les données
      axios
        .post("http://localhost:3000/api/users/newUser", data)
        .then((response) => {
          console.log("Données enregistrées avec succès :", response.data);
          window.location.href = "/login";
        })
        .catch((error) => {
          if (error.response) {
            // La requête a abouti, mais le serveur a renvoyé une erreur
            console.error("Erreur du serveur:", error.response.data);
          } else if (error.request) {
            // La requête a été effectuée, mais aucune réponse n'a été reçue
            console.error("Pas de réponse du serveur");
          } else {
            // Une erreur s'est produite pendant la configuration de la requête
            console.error(
              "Erreur de configuration de la requête:",
              error.message
            );
          }
        });
    }
  };

  return (
    <div className="box2">
      <div className="forms form__login" style={{ width: "450px" }}>
        <h2>Sign up</h2>

        <form
          className="form2"
          id="signupForm"
          style={{ height: "400px" }}
          onSubmit={handleSubmit}
        >
          <div className="log__firstname log__box">
            <input
              type="text"
              className="signup__name input-style"
              placeholder="First name"
              onChange={handleChange}
              required
              id="UserFirstname"
              name="UserFirstname"
            />
            <ion-icon className="i" name="person-outline"></ion-icon>
          </div>
          <div className="log__lastname log__box">
            <input
              type="text"
              className="signup__name input-style"
              placeholder="Last name"
              onChange={handleChange}
              required
              id="UserLastname"
              name="UserLastname"
            />
            <ion-icon className="i" name="person-outline"></ion-icon>
          </div>
          <div className="log__email log__box">
            <input
              type="email"
              className="signup__email log__email--reg input-style"
              placeholder="Email Address"
              onChange={handleChange}
              required
              id="signupEmail"
              name="signupEmail"
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
              name="signupPassword"
              onChange={handleChange}
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
              name="signupConfirmPassword"
              onChange={handleChange}
            />
            {/* <ion-icon className="i" name="lock-closed-outline"></ion-icon>
            <ion-icon
              className="eye showHide"
              name="eye-off-outline"
            ></ion-icon> */}
          </div>
          {passwordError && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "12px" }}
            >
              {passwordError}
            </div>
          )}

          <div className="log__remember log__box">
            <input type="checkbox" className="log__accept--input" id="terms" />
            <label htmlFor="log--accept" style={{ color: "black" }}>
              {" "}
              <strong>I Accept the terms & conditions</strong>
            </label>
          </div>

          <button className="reg-btn" type="submit" id="signupBtn">
            Register Now
          </button>

          <div className="form__text">
            <p style={{ width: "300px" }}>
              {" "}
              <strong>already have an Account ?</strong>
            </p>
            <Link to="/login">
              <a className="form__login--link">
                <strong>Login Now</strong>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
