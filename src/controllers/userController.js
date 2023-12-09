const router = require("express").Router();
const userServices = require("../services/userServices");

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  await userServices.register({ username, password, repeatPassword });
  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userServices.login(username, password);
  res.redirect("/");
});
module.exports = router;
