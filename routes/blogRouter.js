const router = require("express").Router();
const Home = require("../controllers/home");

router.get("/", (req, res) => new Home(req, res));

module.exports = router;
