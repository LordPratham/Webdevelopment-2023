const express = require("express");
const app = express();
app.set("view engine", "twig");
app.set("views", "./public/views");

app.get("/:title-:name", (req, res) => {
  res.render("index", {
    title: req.params.title,
    name: req.params.name,
  });
});
app.listen(3000);
