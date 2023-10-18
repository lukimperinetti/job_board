const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {
  getAllApply,
  getSingleApply,
  createApply,
  updateApply,
  deleteApply,
} = require("../controllers/jobApplyController");

router.get("/", getAllApply);

router.get("/:id", getSingleApply);

router.post("/newJobApply", createApply);

router.patch("/:id", updateApply);

router.delete("/:id", deleteApply);

module.exports = router;
