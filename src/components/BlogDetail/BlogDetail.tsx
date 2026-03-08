import { Link, useMatch } from "react-router-dom";
import style from "./blogdetail.module.scss";
import { blogItems } from "../../data";
import Subscribe from "../Subscribe/Subscribe";
import DopBlock from "./DopBlock/DopBlock";

const BlogDetail = () => {
  const match = useMatch("/blog/:id");
  const blogId: any = match?.params.id;
  const blogItem = blogItems.find((item) => item.id == blogId);

  return (
    <main>
      <div className="container">
        <div className={style.scrumbs}>
          <Link to={"/"} className={style.link}>
            Home
          </Link>
          <img src="./images/about/titleblock-arrow.svg" alt="arrow right" />
          <Link to={"/blog"} className={style.link}>
            Blog
          </Link>
          <img src="./images/about/titleblock-arrow.svg" alt="arrow right" />
          <span>Bringing Designs to Life: How VR is Changing Architecture</span>
        </div>
        <section className={style.blogdetail}>
          <div className={style.content}>
            <span className={style.beige}>{blogItem?.beige}</span>
            <h2 className={style.title}>{blogItem?.title}</h2>
            <h3 className={style.subtitle}>NASYIYA ULFA | 25 NOV 2022</h3>
            <div className={style.image}>
              <img src={blogItem?.image} alt={blogItem?.alt} />
            </div>
            <div className={style.info}>
              <p className={style.text}>
                Architecture is an art and science that is constantly evolving
                with technology. The industry has gone through various
                transformations over the years, from pencil and paper sketches
                to computer-aided design (CAD) software. However, one technology
                that is revolutionizing architecture is virtual reality (VR)
                design.
              </p>
              <p className={style.text}>
                With VR design, architects can bring their designs to life and
                offer clients an immersive experience that was previously
                impossible. The technology enables architects to create a
                virtual representation of their designs, allowing clients to
                step into the building and explore its features and spaces
                before it is built.
              </p>
              <p className={style.text}>
                VR design is a game-changer for architects and clients alike. It
                enables architects to design with a greater level of detail and
                precision, allowing them to identify design flaws and make
                necessary modifications before construction begins. This not
                only saves time and money but also ensures that the final
                product meets the client's expectations.
              </p>
              <p className={style.text}>
                Clients can also benefit from VR design by having a better
                understanding of the design and how it will look and feel in
                real life. It allows them to experience the design in a more
                realistic way, helping them make informed decisions and
                providing valuable feedback to the architects.
              </p>
              <p className={style.beforeimages}>
                Moreover, VR design is not only limited to the design phase. It
                can also be used in the construction process to visualize the
                project's progress and identify any issues that may arise.
              </p>
              <div className={style.images}>
                <div className={style.imageitem}>
                  <img
                    src="./images/blog/blog6.png"
                    alt="the index finger presses the infinity symbol"
                  />
                </div>
                <div className={style.imageitem}>
                  <img src="./images/blog/blog9.png" alt="VR glasses" />
                </div>
              </div>
              <p className={style.text}>
                The benefits of VR design in architecture are clear, and the
                technology is becoming increasingly accessible and affordable.
                More and more architects and firms are incorporating VR design
                into their workflows, and the industry is poised for a major
                transformation.
              </p>
              <p className={style.text}>
                In conclusion, VR design is changing the way architects design
                and bring their projects to life. It is a powerful tool that
                offers a range of benefits, from increased precision and
                efficiency in the design phase to better communication and
                understanding with clients. As the technology becomes more
                advanced and widespread, we can expect to see more innovative
                designs and better-designed buildings in the future.
              </p>
            </div>
            <h4 className={style.texttitle}>Post Tags :</h4>
            <div className={style.tags}>
              #VRDesign #ArchitectureInnovation #VirtualRealityArchitecture
              #BringingDesignsToLife #DesignVisualization
              #ArchitecturalVisualization #RevolutionizingArchitecture
              #BuildingInVR #DesignThinking #VRInArchitecture
            </div>
            <h4 className={style.texttitle}>Share :</h4>
            <div className={style.infosocial}>
              <a href="#" className={style.infosocialitem} target="_blank">
                <img src="./images/home/footer-twitter.svg" alt="twitter" />
              </a>
              <a href="#" className={style.infosocialitem} target="_blank">
                <img src="./images/home/footer-fb.svg" alt="facebook" />
              </a>
              <a href="#" className={style.infosocialitem} target="_blank">
                <img src="./images/home/footer-instagram.svg" alt="instagram" />
              </a>
            </div>
          </div>
          <DopBlock />
        </section>
        <Subscribe />
      </div>
    </main>
  );
};

export default BlogDetail;
