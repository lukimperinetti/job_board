const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobApplySchema = new Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    applied: {
      type: Boolean,
      required: false,
    },
    stored: {
      type: Boolean,
      required: false,
    },
    seen: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
); //associated timestamp information indicating when it was created or last updated

module.exports = mongoose.model("jobApply", jobApplySchema);
