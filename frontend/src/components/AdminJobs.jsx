import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminJobs = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);

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
    <div className="table_annonce">
      <h2>Table Annonce : {jobs && jobs.length}</h2>
      {error && <p>Une erreur est survenue : {error.message}</p>}
      {jobs && (
        <table>
          <thead>
            <tr>
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
                <td>
                  <button className="btn-modifier">Modifier</button>
                  <button
                    className="btn-supprimer"
                    onClick={() => handleDelete(job._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminJobs;
