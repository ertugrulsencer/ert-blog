const router = require("express").Router();
const Home = require("../controllers/home");
const About = require("../controllers/about");
const Categories = require("../controllers/categories");

router.get("/", (req, res) => new Home(req, res));
router.get("/home", (req, res) => res.redirect("/"));
router.get("/about", (req, res) => new About(req, res));
router.get("/about-me", (req, res) => res.redirect("/about"));
router.get("/categories", (req, res) => new Categories(req, res));

module.exports = router;
