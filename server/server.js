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
const { User } = require("./models/user");

// ==============================

// USERS

// ===============================

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server listening at " + PORT);
});
