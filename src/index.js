const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constants");

const app = express();


expressConfig(app);
handlebarsConfig(app);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
