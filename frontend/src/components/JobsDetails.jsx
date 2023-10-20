import { Link } from "react-router-dom";

const JobsDetails = ({ job }) => {
  const limite = 70;
  const descriptionLimitee = job.Description.slice(0, limite);
  const handleButtonClick = (event) => {
    const elementId = event.target.getAttribute("id"); // on reccupère l'id au click
  };
  return (
    <div className="job-details" id={job._id}>
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>{job.Contract}</h6>
            <h2>{job.Title}</h2>
          </div>
          <div className="course-info">
            <h6>{job.Localisation}</h6>
            <h2>{descriptionLimitee}...</h2>

            <Link to={`/jobs/${job._id}`}>
              <button className="btn" onClick={handleButtonClick}>
                Voir plus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
