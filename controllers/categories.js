const Controller = require("../core/controller");

module.exports = class extends Controller {
  constructor(req, res) {
    super(req, res);
    res.render("categories.handlebars", {
      config: this.config(),
      title: "Ert",
    });
  }
};
