const express = require("express");
const app = express();

var Validation = (req, res, next) => {
  console.log("Middleware successful");
  next();
};

var userValidation = (req, res, next) => {
  console.log(`User name is ${req.params.username}`);
  next();
};
// app.use(Validation);
app.get("/", Validation, (req, res) => {
  res.send("hello middleware");
});
app.listen(3000);

app.get("/users/:username", userValidation, (req, res) => {
  res.send("Users directory");
  res.end();
});
