const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
    trim: true
  },

  description: {
    type: String,
    required: false
  },

  "company name": {
    type: String,
    required: false,
    trim: true,
    maxlength: 20
  },

  date: {
    type: "String",
    required: false,
    trim: true
  }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = { Jobs };
