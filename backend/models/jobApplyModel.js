const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobApplySchema = new Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    motivation:{
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },

    // applied: {
    //   type: Boolean,
    //   required: false,
    // },
    // stored: {
    //   type: Boolean,
    //   required: false,
    // },
    // seen: {
    //   type: Boolean,
    //   required: false,
    // },
  },
  { timestamps: true }
); //associated timestamp information indicating when it was created or last updated

module.exports = mongoose.model("jobApply", jobApplySchema);
