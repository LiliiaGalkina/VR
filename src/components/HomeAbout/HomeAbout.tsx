import style from "./homeabout.module.scss";
import ButtonColor from "../ButtonColor/ButtonColor";

const HomeAbout = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.items}>
          <div className={style.images}>
            <div className={style.image}>
              <img
                src="/images/home/about-main.png"
                alt="a guy wearing virtual reality glasses with his hand raised"
              />
            </div>
            <img
              src="/images/home/about-main-bg.png"
              className={style.bg}
              alt="purple rectangle"
            />
            <img
              src="/images/home/about-main-light.png"
              className={style.light}
              alt="multicolored abstraction"
            />
            <img
              src="/images/home/about-video.png"
              className={style.video}
              alt="virtual reality glasses"
            />
          </div>
          <div className={style.content}>
            <h3 className={style.subtitle}>ABOUT US</h3>
            <h2 className={style.title}>
              Bring your events to life like never before with our VR services.
            </h2>
            <p className={style.text}>
              VRNas is a leading provider of VR services for education,
              entertainment, architecture, and events. Our mission is to bring
              the power of virtual reality to everyone, allowing them to explore
              new worlds, learn in new ways, and experience events in a whole
              new light.
            </p>
            <ul className={style.list}>
              <li className={style.listitem}>
                <img src="/images/home/about-checkbox.svg" alt="checkbox" />
                <span>Cutting-Edge Technology</span>
              </li>
              <li className={style.listitem}>
                <img src="/images/home/about-checkbox.svg" alt="checkbox" />
                <span>Versatile Applications</span>
              </li>
              <li className={style.listitem}>
                <img src="/images/home/about-checkbox.svg" alt="checkbox" />
                <span>Affordable and Accessible</span>
              </li>
            </ul>
            <div className={style.button}>
              <ButtonColor textButton="read more" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
