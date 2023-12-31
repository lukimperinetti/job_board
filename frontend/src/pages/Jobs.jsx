import { useEffect, useState } from "react";
import axios from "axios";
import JobsDetails from "../components/JobsDetails";

// Réccupération des données de la base de données
const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  // Filtrer les emplois insérés il y a moins de 2 heures
  const jobsFiltered =
    jobs &&
    jobs.filter((job) => {
      const twoHoursAgo = new Date();
      twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

      const jobDate = new Date(job.createdAt);
      return jobDate >= twoHoursAgo;
    });

  // Filtrer les emplois insérés il y a plus de 2 heures
  const jobsFilteredPlus =
    jobs &&
    jobs.filter((job) => {
      const twoHoursAgo = new Date();
      twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

      const jobDate = new Date(job.createdAt);
      return jobDate <= twoHoursAgo;
    });
  return (

  
    <><h1 style={{marginLeft: "600px"}}>Annonces récentes :</h1>
    <div className="Jobs" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {jobsFiltered &&
        jobsFiltered.map((job) => <JobsDetails key={job._id} job={job} />)}
    </div>
      <h1 style={{marginLeft: "600px"}}>Annonces à venir :</h1>
      <div className="Jobs" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {jobsFilteredPlus &&
        jobsFilteredPlus.map((job) => <JobsDetails key={job._id} job={job} />)}
    </div></>
  );
};

export default Jobs;
