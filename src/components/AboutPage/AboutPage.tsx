import { Link } from "react-router-dom";
import style from "./aboutpage.module.scss";
import AboutUs from "../AboutUs/AboutUs";
import HomeHeroCards from "../HomeHeroCards/HomeHeroCards";
import AboutWhyChoose from "../AboutWhyChoose/AboutWhyChoose";
import Team from "../Team/Team";
import Partners from "../Partners/Partners";
import Faq from "../Faq/Faq";

const AboutPage = () => {
  return (
    <main>
      <div className="container">
        <section className={style.titleblock}>
          <h2 className={style.title}>About Us</h2>
          <div className={style.breadcrumbs}>
            <Link to={"/"} className={style.link}>
              Home
            </Link>
            <img src="/images/about/titleblock-arrow.svg" alt="arrow right" />
            <span className={style.text}>About us</span>
          </div>
          <img
            src="/images/about/titleblock-light.png"
            alt="multicolor abstractive"
            className={style.light}
          />
        </section>
        <AboutUs />
        <section className={style.whychoosecards}>
          <h3 className={style.subtitle}>WHY CHOOSE US</h3>
          <h2 className={style.sectiontitle}>
            Empowering Your Virtual Reality Experience
          </h2>
          <HomeHeroCards />
        </section>
        <AboutWhyChoose />
        <Team />
        <Partners />
        <Faq />
      </div>
    </main>
  );
};

export default AboutPage;
