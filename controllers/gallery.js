const Controller = require("../core/controller");

module.exports = class extends Controller {
  constructor(req, res) {
    super(req, res);
    res.status(200).render("gallery.handlebars", {
      config: this.config(),
      title: "Galeri",
    });
  }
};
