import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setError(error);
      });
  }, []);

  const handlePatch = (user) => {
    setEditUser(user);
  };

  const handleSave = () => {
    console.log(editUser._id)
    axios
      .patch(`http://localhost:3000/api/users/${editUser._id}`, editUser)
      .then(() => {
        console.log("Utilisateur modifié avec succès !");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erreur lors de la modification de l'utilisateur :", error);
        setError(error);
      });
    setEditUser(null);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEditUser({ ...editUser, [name]: value });
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")
    ) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then(() => {
          console.log("Utilisateur supprimé avec succès !");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de l'utilisateur :", error);
          setError(error);
        });
    }
  };

  return (
    <div className="table_users">
      <h2>Table Utilisateurs : {users && users.length} </h2>
      {error && <p>Une erreur est survenue : {error.message}</p>}
      {users && (
        <table  style={{backgroundColor: "#05002b", borderRadius: "35px"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Prénom Nom</th>
              <th>Adresse</th>
              <th>Email</th>
              <th>Mot de passe</th>
              {/* <th>CV</th> */}
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
                {/* <td>{user.cv}</td> */}
                <td>{user.flag}</td>
                <td>
                  <button
                    className="btn-modifier"
                    onClick={() => handlePatch(user)}
                  >
                    Modifier
                  </button>
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
      {editUser && (
        <div className="modal">
          <div className="modal-content">
          <h3 style={{ color: 'black' }}>Modifier l'utilisateur</h3>
            <form onSubmit={handleSave}>
              <label style={{ color: 'black' }}>
                Prénom :
                <input
                  type="text"
                  name="firstname"
                  value={editUser.firstname}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: 'black' }}>
                Nom :
                <input
                  type="text"
                  name="lastname"
                  value={editUser.lastname}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: 'black' }}>
                Adresse :
                <input
                  type="text"
                  name="address"
                  value={editUser.address}
                  onChange={handleInputChange}
                />
              </label>
              <label style={{ color: 'black' }}>
                email :
                <input
                  type="text"
                  name="email"
                  value={editUser.email}
                  onChange={handleInputChange}
                />
              </label>
              {/* <label style={{ color: 'black' }}>
                Mot de passe :
                <input
                  type="text"
                  name="password"
                  value={editUser.password}
                  onChange={handleInputChange}
                />
              </label> */}
              <label style={{ color: 'black' }}>
                Flag :
                <input
                  type="text"
                  name="flag"
                  value={editUser.flag}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Enregistrer</button>
            </form>
            <button onClick={() => setEditUser(null)}>Fermer</button>
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

export default AdminUser;
