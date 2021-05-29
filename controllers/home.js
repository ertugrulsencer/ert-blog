module.exports = class {
  constructor(req, res) {
    const config = {
      site_name: process.env.SITE_NAME || "ErtBlog",
    };
    res.status(200).render("home.handlebars", { config, title: "Ana Sayfa" });
  }
};
