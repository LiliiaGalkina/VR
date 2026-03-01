import style from "./aboutpage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import AboutUs from "../AboutUs/AboutUs";
import HomeHeroCards from "../HomeHeroCards/HomeHeroCards";
import AboutWhyChoose from "../AboutWhyChoose/AboutWhyChoose";
import Team from "../Team/Team";
import Partners from "../Partners/Partners";
import Faq from "../Faq/Faq";
import Subscribe from "../Subscribe/Subscribe";

const AboutPage = () => {
  return (
    <main>
      <div className="container">
       <TitleBlock titletext="About us"/>
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
			  <Subscribe/>
      </div>
    </main>
  );
};

export default AboutPage;
