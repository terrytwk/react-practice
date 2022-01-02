const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const app = express();

app.use(bodyParser.json());
app.use(cors());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.get("/", (req, res) => {
  // db.select("*")
  //   .from("users")
  //   .then((data) => res.send(data));
  res.json("It is working!");
});

// shorter way of doing with double arguments: function (req, res) automatically called after function (db, bcrypt)
app.post("/signin", signin.handleSignin(db, bcrypt));

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.put("/image", (req, res) => image.handleImage(req, res, db));
app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
