import { Link } from "react-router-dom";
import style from "./aboutpage.module.scss";

const AboutPage = () => {
  return (
    <main>
      <div className="container">
        <section className={style.titleblock}>
          <h2 className={style.title}>About Us</h2>
          <div className={style.breadcrumbs}>
            <Link to={"/"}>Home</Link>
            <span>About us</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
