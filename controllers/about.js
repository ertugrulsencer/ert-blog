module.exports = class About {
  constructor(req, res) {
    res.status(200).render("about.handlebars");
  }
};
