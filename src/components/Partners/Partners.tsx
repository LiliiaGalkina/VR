import style from "./partners.module.scss";
import { partners } from "../../data";

const Partners = () => {
  return (
    <section className={style.partners}>
      <div className="container">
        <h3 className={style.subtitle}>Our Trusted Partners</h3>
        <h2 className={style.title}>Discover the Companies We Work With</h2>
        <div className={style.circle1}>
          <div className={style.circle2}>
            {partners.map((partner) => (
              <div key={partner.id} className={style.partner}>
                <div className={style.innerpartner}>
                  <img
                    src={partner.img}
                    alt={partner.alt}
                    className={style.logoImg}
                  />
                </div>
              </div>
            ))}
            <div className={style.circle3}>
              <div className={style.circle4}>
                <div className={style.maimimage}>
                  <img
                    src="/images/home/partners-bg.png"
                    className={style.bg}
                    alt="purple rectangle"
                  />
                  <img
                    src="/images/home/partners-light.png"
                    className={style.light}
                    alt="multicolored abstraction"
                  />
                  <img
                    src="/images/home/partners-main2.png"
                    alt="a guy in a white shirt and virtual reality glasses"
                    className={style.mainimgdown}
                  />
                  <img
                    src="/images/home/partners-main.png"
                    alt="a guy in a white shirt and virtual reality glasses"
                    className={style.mainimgup}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
