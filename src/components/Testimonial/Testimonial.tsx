import style from "./testimonial.module.scss";

const Testimonial = () => {
  return (
    <section className={style.testimonial}>
      <div className="container">
        <div className={style.circle1}>
          <div className={style.circle2}>
            <div className={style.titleblock}>
              <h3 className={style.subtitle}>TESTIMONIAL</h3>
              <h2 className={style.title}>What Our Clients Are Saying</h2>
            </div>
            <div className={style.circle3}>
              <div className={style.circle4}>
                <div className={style.circle5}>
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
