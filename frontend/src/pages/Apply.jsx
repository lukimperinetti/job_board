import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Apply = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    UserFirstname: "",
    UserLastname: "",
    UserEmail: "",
    UserPhoneNumber: "",
    UserMotivation: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      // Données à envoyer à l'API
      const data = {
        firstname: formData.UserFirstname,
        lastname: formData.UserLastname,
        email: formData.UserEmail,
        phoneNumber: formData.UserPhoneNumber,
        motivation: formData.UserMotivation,
        jobId: id,
      };
      

      // Effectuer une requête Axios pour poster les données
      axios
        .post("http://localhost:3000/api/apply/newJobApply", data)
        .then((response) => {
            console.log("Candidature enregistrée avec succès, ID de l'annonce attribué par le serveur :", response.data);
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



  return (
    <div className="box2">
      <div className="forms form__login" style={{ width: "450px" }}>
        <h2>Apply</h2>

        <form
          className="form2"
          id="applyForm"
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
              placeholder="Email"
              onChange={handleChange}
              required
              id="UserEmail"
              name="UserEmail"
            />
            <ion-icon className="i" name="mail-outline"></ion-icon>
          </div>
          <div className="log__pass log__box">
            <input
              type="tel"
              className="signup__pass input-style"
              placeholder="Phone number"
              onChange={handleChange}
              required
              id="UserPhoneNumber"
              name="UserPhoneNumber"
            />
            <ion-icon className="i" name="call-outline"></ion-icon>
          </div>
          {/* <div className="log__pass log__box">
            <input
              type="file"
              className="signup__confirm log__confirm--reg input-style"
              accept=".pdf, .doc, .docx"
              onChange={handleChange}
              required
              name="cv"
            />
            <ion-icon className="i" name="document-attach-outline"></ion-icon>
          </div> */}
          <div className="log__pass log__box">
            <textarea
              className="signup__confirm log__confirm--reg input-style"
              placeholder="Motivation"
              onChange={handleChange}
              required
              id="UserMotivation"
              name="UserMotivation"
            />
            <ion-icon className="i" name="document-text-outline"></ion-icon>
          </div>

          <button className="reg-btn" type="submit" id="applyBtn">
            Postuler
          </button>

          <div className="form__text">
            <p style={{ width: "300px" }}>
              <strong>Vous avez déjà un compte ? </strong>
            </p>
            <Link to="/jobs/login">
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
export default Apply;