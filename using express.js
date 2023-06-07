const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/ab*cd*", (req, res) => {
  res.send(`Hello ${req.params[0]} second ${req.params[1]}`);
});
app.listen(3000);
