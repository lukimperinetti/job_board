import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminJobs = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);
  const [editJobs, setEditJobs] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setError(error);
      });
  }, []);

  const handlePatch = (job) => {
    setEditJobs(job);
  };

  const handleSave = () => {
    console.log(editJobs._id);
    axios
      .patch(`http://localhost:3000/api/jobs/${editJobs._id}`, editJobs)
      .then(() => {
        console.log("Utilisateur modifié avec succès !");
        window.location.reload();
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la modification de l'utilisateur :",
          error
        );
        setError(error);
      });
    setEditJobs(null);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEditJobs({ ...editJobs, [name]: value });
  };

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
      axios
        .delete(`http://localhost:3000/api/jobs/${id}`)
        .then(() => {
          console.log("Annonce supprimée avec succès !");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de l'annonce :", error);
          setError(error);
        });
    }
  };

  return (
    <div className="table_annonce" >
      <h2>Table Annonce : {jobs && jobs.length}</h2>
      {error && <p>Une erreur est survenue : {error.message}</p>}
      {jobs && (
        <div>
        <table style={{backgroundColor: "#05002b", borderRadius: "35px"}}>
          <thead>
            <tr >
              <th>ID</th>
              <th>Titre</th>
              <th>Déscription</th>
              <th>Salaire</th>
              <th>Contrat</th>
              <th>Localisation</th>
              <th>Booster</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job._id}</td>
                <td>{job.Title}</td>
                <td>{job.Description}</td>
                <td>{job.Salary}</td>
                <td>{job.Contract}</td>
                <td>{job.Localisation}</td>
                <td>{job.Booster}</td>
                <td style={{width: "170px"}}>
                  <button
                    className="btn-modifier"
                    onClick={() => handlePatch(job)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn-supprimer"
                    style={{backgroundColor: "red"}}
                    onClick={() => handleDelete(job._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      {editJobs && (
        <div className="modal">
          <div className="modal-content">
            <h3 style={{ color: "black" }}>Modifier l'annonce</h3>
            <form onSubmit={handleSave}>
              <label style={{ color: "black" }}>
                Titre :
                <input
                  type="text"
                  name="Title"
                  value={editJobs.Title}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Déscription :
                <input
                  type="text"
                  name="Description"
                  value={editJobs.Description}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Salaire :
                <input
                  type="text"
                  name="Salary"
                  value={editJobs.Salary}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Contrat :
                <input
                  type="text"
                  name="Contract"
                  value={editJobs.Contract}
                  onChange={handleInputChange}
                />
              </label>
              {/* <label style={{ color: 'black' }}>
                Mot de passe :
                <input
                  type="text"
                  name="password"
                  value={editJobs.password}
                  onChange={handleInputChange}
                />
              </label> */}
              <label style={{ color: "black" }}>
                Localisation :
                <input
                  type="text"
                  name="Localisation"
                  value={editJobs.Localisation}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Booster :
                <input
                  type="text"
                  name="Booster"
                  value={editJobs.Booster}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Enregistrer</button>
            </form>
            <button onClick={() => setEditJobs(null)}>Fermer</button>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          width: 400px;
        }
      `}</style>
    </div>
  );
};

export default AdminJobs;
