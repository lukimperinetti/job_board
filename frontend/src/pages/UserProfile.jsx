import { useEffect, useState } from "react";
import axios from "axios";
import decodeJwt from "jwt-decode";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userId = decodeJwt(token).id;
      axios
        .get(`http://localhost:3000/api/users/${userId}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données de l'utilisateur :",
            error
          );
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!userData) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div classNameName="job-details">
      <div
        className="overlay"
        style={{ paddingBottom: "100px", paddingTop: "100px" }}
      >
        <div className="overlay__inner">
          <h1 className="overlay__title">
            {userData.firstname} {userData.lastname}
          </h1>
          <p className="overlay__description">
            {userData.Description} <br />
            <strong>Adresse : </strong>
            {userData.address} <br />
            <strong>Email : </strong>
            {userData.email} <br />
            <strong>Telephone : </strong>
            {userData.phoneNumber}
            <br />
            <strong>dev Type : </strong>
            {userData.flag}
          </p>
          <button className="overlay__btn">
            <span>Modifier</span>
          </button>
          {userData.flag === 2 && (
            <a href={`/dashboard?flag=2&id=${userData._id}`}>
              <button className="overlay__btn">
                <span>AdminBoard</span>
              </button>
            </a>
          )}
          {userData.flag === 1 && (
            <a href={`/profil/createad?flag=1&id=${userData._id}`}>
              <button className="overlay__btn">
                <span>Ajouter une annonce</span>
              </button>
            </a>
          )}
          <button className="overlay__btn" onClick={handleLogout}>
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
