import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ApplyUser = () => {
    const { id } = useParams();
    const userId = localStorage.getItem("userId");  //récupérer userId depuis local storage
    const [user, setUser] = useState({
        UserFirstname: "",
        UserLastname: "",
        UserEmail: "",
        UserPhoneNumber: "",
        UserMotivation: "",
    });
    const [formData, setFormData] = useState({
        UserFirstname: user.UserFirstname,
        UserLastname: user.UserLastname,
        UserEmail: user.UserEmail,
        UserPhoneNumber: user.UserPhoneNumber,
        UserMotivation: user.UserMotivation,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/${userId}`)
            .then((response) => {
                const userData = response.data;
                setUser({
                    UserFirstname: userData.firstname,
                    UserLastname: userData.lastname,
                    UserEmail: userData.email,
                    UserPhoneNumber: userData.phoneNumber,
                    UserMotivation: userData.motivation,
                });

                setFormData({                    // Mettez à jour les valeurs
                    UserFirstname: userData.firstname,
                    UserLastname: userData.lastname,
                    UserEmail: userData.email,
                    UserPhoneNumber: userData.phoneNumber,
                    UserMotivation: userData.motivation,
                });
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données de l utilisateur:', error);
            });
    }, []);
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
    };
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
                            value={formData.UserFirstname}
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
                            value={formData.UserLastname}
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
                            id="UserEmail"
                            name="UserEmail"
                            value={formData.UserEmail}
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
                            value={formData.UserPhoneNumber}
                        />
                        <ion-icon className="i" name="call-outline"></ion-icon>
                    </div>
                    <div className="log__pass log__box">
                        <textarea
                            className="signup__confirm log__confirm--reg input-style"
                            placeholder="Motivation"
                            onChange={handleChange}
                            required
                            id="UserMotivation"
                            name="UserMotivation"
                            value={formData.UserMotivation}
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

export default ApplyUser;