const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    desc: String
  },

  "company name": {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },

  date: {
    type: "String",
    required: true,
    trim: true
  }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = { Jobs };
