const router = require("express").Router();
const Home = require("../controllers/home");
const About = require("../controllers/about");

router.get("/", (req, res) => new Home(req, res));
router.get("/about", (req, res) => new About(req, res));
router.get("/about-me", (req, res) => res.redirect("/about"));

module.exports = router;
