import BgImg from "../assets/HomeImgs/BgImg.jpeg";
import Jobs from "./Jobs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="BgHome"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 1,
      }}
    >
      <h1 className="bigtitle" style={{animation: "translateLeft 3s ease-in-out"}}>Trouvez exactement ce que vous cherchez</h1>
      <p className="intro" style={{animation: "translateLeft 3s ease-in-out", fontSize: "15px"}}>
        Nous sommes là pour vous fournir la plus haute qualité de service
      </p>
      <Link to="/jobs">
        <button className="commencerBtt" style={{animation: "translateLeft 3s ease-in-out"}}>Commencer</button>
      </Link>
    </div>
  );
};

export default Home;
