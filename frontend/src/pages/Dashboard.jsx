import AdminUser from "../components/AdminUser";
import AdminJobs from "../components/AdminJobs";
import AdminApply from "../components/AdminApply";


import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="Ads">
      <h1>Admin dashboard</h1>
      <Link to="/profil/createad">
        <button>Create Ad</button>
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
