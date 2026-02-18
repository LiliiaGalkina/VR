import style from "./homehero.module.scss";
import ButtonColor from "../ButtonColor/ButtonColor";
import HomeHeroCards from "../HomeHeroCards/HomeHeroCards";

const HomeHero = () => {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.items}>
          <div className={style.content}>
            <h1 className={style.title}>Immerse Yourself in Virtual Reality</h1>
            <p className={style.text}>
              Experience Unforgettable Events in VR. Bring your events to life
              like never before with our VR services
            </p>
            <div className={style.button}>
              <ButtonColor textButton="discover more" />
            </div>
            <div className={style.body}>
              <div className={style.clients}>
                <div className={style.clientimages}>
                  <img
                    src="./images/home/hero-circle-foto1.png"
                    alt="clients foto"
                  />
                  <img
                    src="./images/home/hero-circle-foto2.png"
                    alt="clients foto"
                  />
                  <img
                    src="./images/home/hero-circle-foto3.png"
                    alt="clients foto"
                  />
                </div>
                <p className={style.info}>
                  <span>32k+</span> Happy Client
                </p>
              </div>
              <div className={style.littlefoto}>
                <img
                  src="./images/home/hero-video.png"
                  alt="girl with virtual reality glasses"
                />
              </div>
            </div>
          </div>
          <div className={style.images}>
            <div className={style.maimimage}>
              <img
                src="./images/home/hero-main.png"
                alt="a guy in a white shirt and virtual reality glasses"
              />
            </div>
            <div className={style.imagelight}><img src="./images/home/hero-main-decor.png" alt="" /></div>
          </div>
        </div>
        <div className={style.decorbottom}>
          <img src="./images/home/hero-decor-bottom-left.png" alt="fon decor" />
        </div>
        <HomeHeroCards/>
      </div>
    </section>
  );
};

export default HomeHero;
