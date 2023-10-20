require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import routes
const jobRoutes = require("./routes/jobs");
const userRoutes = require("./routes/users");
const applyRoutes = require("./routes/apply");

const app = express(); //express app

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.path, req.method);
  next();
});

app.use(cors({
  methods: 'GET, POST, PATCH, DELETE',
  origin: 'http://localhost:5173', // Remplacez par l'URL de votre application React
}));

// All routes
app.use("/api/jobs", jobRoutes); //routes for jobs
app.use("/api/users", userRoutes); //routes for jobs
app.use("/api/apply", applyRoutes); //routes for jobs

mongoose
  .connect(process.env.MONGO_URI) //connect to database
  .then(() => {
    app.listen(process.env.PORT, () => {
      //listen for requests
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
