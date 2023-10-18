const jobApplyModel = require("../models/jobApplyModel");
const apply = require("../models/jobApplyModel");
const job = require("../models/jobApplyModel");
const mongoose = require("mongoose");

//get all  aplly info
const getAllApply = async (req, res) => {
  const applys = await apply.find({}).sort({ createdAt: -1 }); // get all apply. use apply.find({Title: "apply"}) to get a specific apply
  res.status(200).json(applys);
};

// get single apply
const getSingleApply = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Apply does not exist" });
  }

  const singleApply = await Apply.findById(id);

  if (!singleApply) {
    return res.status(404).json({ error: "Apply does not exist" });
  }
  res.status(200).json(singleApply);
};

// create a new apply
const createApply = async (req, res) => {
  const { jobId, userId, applied, stored, seen } = req.body;
  try {
    const ap = await apply.create({
      jobId,
      userId,
      applied,
      stored,
      seen,
    });
    res.status(200).json(ap);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a apply
const updateApply = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Apply does not exist" });
  }
  const apply = await jobApplyModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // spread operator : copy all the properties of req.body to the findOneAndUpdate object.
    }
  );
  if (!apply) {
    return res.status(404).json({ error: "Apply does not exist" });
  }
  res.status(200).json({ message: "Apply updated successfully" });
};

// delete a apply
const deleteApply = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Apply does not exist" });
  }

  const apply = await jobApplyModel.findOneAndDelete({ _id: id });

  if (!apply) {
    return res.status(404).json({ error: "Apply does not exist" });
  }

  res.status(200).json({ message: "Apply deleted successfully" });
};

module.exports = {
  getAllApply,
  getSingleApply,
  createApply,
  updateApply,
  deleteApply,
};
