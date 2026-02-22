import style from "./articles.module.scss";
import ButtonBorder from "../ButtonBorder/ButtonBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import { articles } from "../../data";
import { articlesSliderItems } from "../../data";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiperstyles.scss";

const Articles = () => {
  return (
    <section className={style.ourarticles}>
      <div className="container">
        <h3 className={style.subtitle}>OUR ARTICLES</h3>
        <div className={style.titleblock}>
          <h2 className={style.title}>Stay Up-to-Date with Our VR Insights</h2>
          <div className={style.mainbutton}>
            <ButtonBorder textButton="SEE ALL" />
          </div>
        </div>
        <div className={style.items}>
          <div className={style.slideritem}>
            <h3 className={style.itemtitle}>Popular Article</h3>
            <div className={style.slider}>
              <Swiper
							  modules={[Pagination]}
							  slidesPerView={1}
							  pagination={{ clickable: true }}
              >
                {articlesSliderItems.map((item) => (
                  <SwiperSlide key={item.id} className={style.slideritem}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className={style.mainimage}
                    />
                    <div className={style.block}>
                      <span className={style.beige}>{item.category}</span>
                      <div className={style.titlesliderblock}>
                        <h3 className={style.slidertitle}>{item.title}</h3>
                        <div className={style.arrow}>
                          <img
                            src="/images/home/articles-arrow-right.svg"
                            alt="arrow-right"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={style.content}>
            <h3 className={style.itemtitle}>Recent Article</h3>
            <div className={style.articles}>
              {articles.map((article) => (
                <div key={article.id} className={style.article}>
                  <img
                    src={article.img}
                    alt={article.alt}
                    className={style.image}
                  />
                  <div className={style.info}>
                    <span>{article.category}</span>
                    <p className={style.text}>{article.text}</p>
                  </div>
                  <div className={style.arrow}>
                    <img
                      src="/images/home/articles-arrow-right.svg"
                      alt="arrow-right"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
