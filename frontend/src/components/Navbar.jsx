import { Link } from "react-router-dom";
import LogoML from "../assets/HomeImgs/logo_ml.png";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={LogoML} alt="logo" className="logoMl" />
        </Link>

        {token ? (
          <Link to="/profil" className="authBtn">
            Mon compte
          </Link>
        ) : (
          <Link to="/login" className="authBtn">
          Connexion/Inscription
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
