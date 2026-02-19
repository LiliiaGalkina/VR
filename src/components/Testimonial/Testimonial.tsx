import style from "./testimonial.module.scss";

const Testimonial = () => {
  return (
    <section className={style.testimonial}>
      <div className="container">
        <div className={style.circle1}>
          <div className={style.circlefoto1}>
            <img
              src="/images/home/hero-circle-foto1.png"
              alt="foto in circle"
            />
            <div className={style.beige}>
              <p>
                The team was professional, responsive, and a pleasure to work
                with. We highly recommend VRNas for any VR needs.
              </p>
              <span>Robert Fox - CEO Anono</span>
            </div>
          </div>
          <div className={style.circlefoto2}>
            <img
              src="public/images/home/hero-circle-foto3.png"
              alt="foto in circle"
            />
            <div className={style.beige}>
              <p>
                The team was professional, responsive, and a pleasure to work
                with. We highly recommend VRNas for any VR needs.
              </p>
              <span>Robert Fox - CEO Anono</span>
            </div>
          </div>
          <div className={style.circle2}>
            <div className={style.titleblock}>
              <h3 className={style.subtitle}>TESTIMONIAL</h3>
              <h2 className={style.title}>What Our Clients Are Saying</h2>
            </div>
            <div className={style.circlefoto3}>
              <img
                src="/images/home/testimonial-circle-foto2.png"
                alt="foto in circle"
              />
              <div className={style.beige}>
                <p>
                  The team was professional, responsive, and a pleasure to work
                  with. We highly recommend VRNas for any VR needs.
                </p>
                <span>Robert Fox - CEO Anono</span>
              </div>
            </div>
            <div className={style.circle3}>
              <div className={style.circlefoto4}>
                <img
                  src="/images/home/testimonial-circle-foto3.png"
                  alt="foto in circle"
                />
                <div className={style.beige}>
                  <p>
                    The team was professional, responsive, and a pleasure to
                    work with. We highly recommend VRNas for any VR needs.
                  </p>
                  <span>Robert Fox - CEO Anono</span>
                </div>
              </div>
              <div className={style.circle4}>
                <div className={style.circlefoto5}>
                  <img
                    src="/images/home/testimonial-circle-foto1.png"
                    alt="foto in circle"
                  />
                  <div className={style.beige}>
                    <p>
                      The team was professional, responsive, and a pleasure to
                      work with. We highly recommend VRNas for any VR needs.
                    </p>
                    <span>Robert Fox - CEO Anono</span>
                  </div>
                </div>
                <div className={style.circle5}>
                  <div className={style.circlefoto6}>
                    <img
                      src="public/images/home/hero-circle-foto2.png"
                      alt="foto in circle"
                    />
                    <div className={style.beige}>
                      <p>
                        The team was professional, responsive, and a pleasure to
                        work with. We highly recommend VRNas for any VR needs.
                      </p>
                      <span>Robert Fox - CEO Anono</span>
                    </div>
                  </div>
                  <div className={style.circle6}>
                    <div className={style.images}>
                      <div className={style.maimimage}>
                        <img
                          src="./images/home/testimonial-maindown.png"
                          alt="a guy in a white shirt and virtual reality glasses"
                          className={style.mainimgdown}
                        />
                        <img
                          src="./images/home/testimonial-mainup.png"
                          alt="a guy in a white shirt and virtual reality glasses"
                          className={style.mainimgup}
                        />
                      </div>
                      <div className={style.imagelight}>
                        <img
                          src="./images/home/testimonial-light.png"
                          alt="multicolored abstraction"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
