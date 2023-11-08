const express = require("express");

const app = express();
const PORT = 5050;

app.get("/", (res, req) => {
  res.send("hello from express server");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
