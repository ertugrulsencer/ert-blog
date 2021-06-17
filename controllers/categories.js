const Controller = require("../core/controller");
const Categories = require("../models/Categories");

module.exports = class extends Controller {
  constructor(req, res) {
    super(req, res);
    this.res = res;
    Categories.find({})
      .then((categories) => {
        this.categories = categories;
      })
      .catch((err) => {
        this.categories = null;
        console.error(err);
      })
      .finally(() => this.render());
  }
  render() {
    this.res.render("categories.handlebars", {
      title: "Kategoriler",
      config: this.config(),
      categories: this.categories,
    });
  }
};
