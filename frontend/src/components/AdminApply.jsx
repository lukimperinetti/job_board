import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminApply = () => {
  const [applys, setApplys] = useState(null);
  const [error, setError] = useState(null);
  const [editApply, setEditApply] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/apply")
      .then((response) => {
        setApplys(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  const handlePatch = (apply) => {
    setEditApply(apply);
  };

  const handleSave = () => {
    console.log(editApply._id);
    axios
      .patch(`http://localhost:3000/api/apply/${editApply._id}`, editApply)
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
      setEditApply(null);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEditApply({ ...editApply, [name]: value });
  };

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette donnée ?")) {
      axios
        .delete(`http://localhost:3000/api/apply/${id}`)
        .then(() => {
          console.log("Donnée supprimée avec succès !");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de la donnée :", error);
          setError(error);
        });
    }
  };

  return (
    <div className="table_users">
      <h2>Table Postulée : {applys && applys.length} </h2>
      {error && <p>Une erreur est survenue : {error.message}</p>}
      {applys && (
        <table style={{backgroundColor: "#05002b", borderRadius: "35px"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Annonce ID</th>
              <th>Prénom Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>CV</th>
              <th>motivation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applys.map((apply) => (
              <tr key={apply._id}>
                <td>{apply._id}</td>
                <td>{apply.jobId}</td>
                <td>
                  {apply.firstname} {apply.lastname}
                </td>
                <td>{apply.email}</td>
                <td>{apply.phoneNumber}</td>
                <td>{apply.cv}</td>
                <td>{apply.motivation}</td>
                <td>
                  <button
                    className="btn-modifier"
                    onClick={() => handlePatch(apply)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn-supprimer"
                    onClick={() => handleDelete(apply._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editApply && (
        <div className="modal">
          <div className="modal-content">
            <h3 style={{ color: "black" }}>Modifier l'annonce</h3>
            <form onSubmit={handleSave}>
              <label style={{ color: "black" }}>
                Prénom :
                <input
                  type="text"
                  name="firstname"
                  value={editApply.firstname}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Nom :
                <input
                  type="text"
                  name="lastname"
                  value={editApply.lastname}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Email :
                <input
                  type="text"
                  name="email"
                  value={editApply.email}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: "black" }}>
                Téléphone :
                <input
                  type="text"
                  name="phoneNumber"
                  value={editApply.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              {/* <label style={{ color: 'black' }}>
                Mot de passe :
                <input
                  type="text"
                  name="password"
                  value={editApply.password}
                  onChange={handleInputChange}
                />
              </label> */}
              <label style={{ color: "black" }}>
                Motivation :
                <input
                  type="text"
                  name="motivation"
                  value={editApply.motivation}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Enregistrer</button>
            </form>
            <button onClick={() => setEditApply(null)}>Fermer</button>
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
      <style jsx>{`
        .Ads {
          margin: 20px;
          background-color: #aaaaaa;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #aaaaaa;
        }
        th,
        td {
          text-align: left;
          padding: 8px;
        }
        th {
          background-color: #8892b3;
          color: white;
        }
        tr:nth-child(even) {
          background-color: ##fffcf2;
        }
        .btn-modifier {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 50px;
          margin-right: 5px;
        }
        .btn-supprimer {
          background-color: #f44336;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 50px;
        }
        h2{
          color: black;
        }
      `}</style>
    </div>
  );
};

export default AdminApply;
