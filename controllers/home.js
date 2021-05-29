module.exports = class {
  constructor(req, res) {
    res.status(200).render("home.handlebars", { title: "Ana Sayfa" });
  }
};
