const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Models
const { Admin } = require("./models/admin");
const { Student } = require("./models/student");
const { Company } = require("./models/company");

// ==============================
//           STUDENTS
// ==============================

// Get all users Data
app.get("/api/student/", (req, res) => {
  const student = Student.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Post Student Data
app.post("/api/student/register", (req, res) => {
  const student = new Student(req.body);
  student.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// ==============================
//           ADMINS
// ==============================

app.get("/api/admin/", (req, res) => {
  const admin = Admin.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Post Admin Data
app.post("/api/admin/register", (req, res) => {
  const admin = new Admin(req.body);
  admin.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// ==============================
//           COMPANY
// ==============================

// Get company Details
app.get("/api/company/", (req, res) => {
  const company = Company.find((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Post Company Details
app.post("/api/company/register", (req, res) => {
  const company = new Company(req.body);
  company.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server listening at " + PORT);
});
