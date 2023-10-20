import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  const handleDelete = (id) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")
    ) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then(() => {
          console.log("Utilisateur supprimée avec succès !");
          window.location.reload();
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la suppression de l'utilisateur :",
            error
          );
          setError(error);
        });
    }
  };

  return (
    <div className="table_users">
      <h2>Table Utilisateurs : {users && users.length} </h2>
      {error && <p>Une erreur est survenue : {error.message}</p>}
      {users && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Prénom Nom</th>
              <th>Adresse</th>
              <th>Email</th>
              <th>Mot de passe</th>
              <th>CV</th>
              <th>Flag</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.cv}</td>
                <td>{user.flag}</td>
                <td>
                  <button className="btn-modifier">Modifier</button>
                  <button
                    className="btn-supprimer"
                    onClick={() => handleDelete(user._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
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
          background-color: #4caf50;
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
          border-radius: 5px;
          margin-right: 5px;
        }
        .btn-supprimer {
          background-color: #f44336;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default AdminUser;
