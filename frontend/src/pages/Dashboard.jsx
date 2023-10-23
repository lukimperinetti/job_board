import AdminUser from "../components/AdminUser";
import AdminJobs from "../components/AdminJobs";
import AdminApply from "../components/AdminApply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard" style={{ backgroundColor: "transparent" }}>
      <h1>
        <FontAwesomeIcon icon={faUser} /> Admin 
      </h1>
      <Link to="/profil/createad" >
        <button className="CreateAdButt">Create Ad</button>
      </Link>
      <AdminJobs />
      <hr />
      <AdminUser />
      <hr />
      <AdminApply />
    </div>
  );
};

export default Dashboard;
