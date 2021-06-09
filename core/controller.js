module.exports = class Controller {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  config() {
    return {
      site_name: process.env.SITE_NAME || "ErtBlog",
    };
  }
};
