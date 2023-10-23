import React, { useState } from "react";
import axios from "axios";

const FormCreateAd = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    jobSalary: "",
    jobContractType: "",
    jobLocation: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Title: formData.jobTitle,
      Description: formData.jobDescription,
      Salary: formData.jobSalary,
      Contract: formData.jobContractType,
      Localisation: formData.jobLocation,
    };

    axios
      .post("http://localhost:3000/api/jobs/newAd", data)
      .then((response) => {
        console.log("Données enregistrées avec succès :", response.data);

        setFormData({
          jobTitle: "",
          jobDescription: "",
          jobSalary: "",
          jobContractType: "",
          jobLocation: "",
        });
        alert("Envoyé avec succès");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Erreur du serveur:", error.response.data);
        } else if (error.request) {
          console.error("Pas de réponse du serveur");
        } else {
          console.error(
            "Erreur de configuration de la requête:",
            error.message
          );
        }
      });
  };

  return (
    <div className="containerFormAd">
      <form id="contact" onSubmit={handleSubmit} style={{backgroundColor: "transparent"}}>
        <h3 style={{color: "black", fontSize: "30px", fontWeight: "600"}}>Créez une annonce</h3>
        <fieldset>
          <label for="jobTitle" className="adFormTxt" style={{ display: "block" }}>
            Titre
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            // placeholder="Titre du poste"
            required
            autoFocus
            maxLength="40"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label for="jobDescription" className="adFormTxt">
            Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            // placeholder="Description du poste"
            required
            value={formData.jobDescription}
            onChange={handleChange}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="jobSalary" className="adFormTxt">
            Salaires
          </label>
          <input
            type="text"
            id="jobSalary"
            name="jobSalary"
            // placeholder="Salaires (en euros)"
            required
            pattern="[0-9]+"
            value={formData.jobSalary}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label for="jobContractType" className="adFormTxt">
            Type de contrat{" "}
          </label>
          <select
            id="jobContractType"
            name="jobContractType"
            required
            value={formData.jobContractType}
            onChange={handleChange}
          >
            <option value="" className="adFormTxt">
              Sélectionnez le type de contrat
            </option>
            <option value="CDI" className="adFormTxt">
              CDI
            </option>
            <option value="CDD" className="adFormTxt">
              CDD
            </option>
            <option value="Stage" className="adFormTxt">
              Stage
            </option>
            <option value="Freelance" className="adFormTxt">
              Freelance
            </option>
            <option value="Autre" className="adFormTxt">
              Autre
            </option>
          </select>
        </fieldset>
        <fieldset>
          <label for="jobLocation" className="adFormTxt">
            Localisation
          </label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            // placeholder="Localisation du poste"
            required
            value={formData.jobLocation}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Poster
          </button>
        </fieldset>
        <p className="copyright">
          Designed by{" "}
          <a href="https://colorlib.com" target="_blank" title="Colorlib">
            Colorlib
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormCreateAd;
