const express = require("express");
const app = express();
const path = require("path");

let username = "";
let email = "";
let password = "";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  username = req.body.username;
  email = req.body.email;
  password = req.body.password;
  res.redirect("/profile");
});

app.get("/profile", (req, res) => {
  res.json({
    username,
    email,
    password,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Listening on PORT", process.env.PORT);
});
