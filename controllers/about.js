const Controller = require("../core/controller");
module.exports = class extends Controller {
  constructor(req, res) {
    super(req, res);
    res.status(200).render("about.handlebars", {
      config: this.config(),
      title: "Hakkımda",
      about_text: `<p class="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt
                    quae, deserunt nostrum praesentium ea error, eveniet laborum rem sed dolor
                    veniam repudiandae tempora. Ipsa labore sequi veniam minima fugiat, quos
                    accusamus?
                  </p>
                  <img src="/profile.jpeg" alt="profile-2" width="220" />
                  <p class="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident
                    voluptatem voluptate placeat unde error esse tempore earum omnis eligendi at
                    incidunt nesciunt aliquid officia reprehenderit autem hic velit eaque
                    obcaecati. Dolorem iste aut corporis vel quae ipsa obcaecati corrupti
                    repudiandae iusto, officia nesciunt autem distinctio sit aspernatur omnis
                    provident eum deserunt nemo!
                  </p>
                  <img src="/profile2.jpg" alt="profile-2" width="200" />
                  <p class="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam modi
                    aspernatur fuga laudantium dolorem, libero odio nostrum nemo maxime neque
                    quisquam quibusdam, saepe veniam commodi eum corrupti culpa deleniti illo ab
                    accusantium cum voluptate! Quibusdam, optio exercitationem.
                  </p>
                  <p class="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore
                    harum quas totam eum rerum vero nulla amet quaerat eos, voluptatibus quae
                    dignissimos dolore, ea provident nemo numquam sapiente est? Corporis error
                    recusandae voluptas doloremque? Temporibus veniam veritatis odio nesciunt,
                    totam eveniet.
                  </p>
      `
    });
  }
};
