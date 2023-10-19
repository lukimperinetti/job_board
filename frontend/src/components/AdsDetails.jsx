import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ML_aprouved from "../assets/ml_aprouved.png";

const AdsDetails = ({ ads }) => {
  return (
    <div className="job-details">
      <div
        className="overlay"
        style={{ paddingBottom: "100px", paddingTop: "100px" }}
      >
        <div className="overlay__inner">
          <h1 className="overlay__title">
            {ads.Title}
            {/* <span className="text-gradient">generative</span>  */}
          </h1>
          <p className="overlay__description">
            {ads.Description} <br />
            {/* <strong><br/>Alors, postuler :) ?</strong> */}
            <strong>Salaire : </strong>
            {ads.Salary} <br />
            <strong>Type de contrat : </strong>
            {ads.Contract} <br />
            <strong>Localisation : </strong>
            {ads.Localisation}
            {/* {ads.Bosster &&  <img src={ML_aprouved} alt="ad aprouved" className='mlAprouved' />}; */}
          </p>

          <Link to={`/apply/${ads._id}`}>
            <button className="overlay__btn">Postuler :)</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AdsDetails;
