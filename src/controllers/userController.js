const router = require("express").Router();

router.get("/users/register", (req, res) => {
    res.render("register");
});


module.exports = router;
