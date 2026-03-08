import style from "./articlesslider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { articlesSliderItems } from "../../data";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiperstyles.scss";
import { Link } from "react-router-dom";

const ArticlesSlider = () => {
	return (
    <div className={style.slidercontainer}>
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
                className={style.sliderimage}
              />
              <div className={style.block}>
                <span className={style.beige}>{item.category}</span>
                <div className={style.titlesliderblock}>
                  <h3 className={style.slidertitle}>{item.title}</h3>
                  <Link to={`/blog/${item.id}`} className={style.arrow}>
                    <img
                      src="/images/home/articles-arrow-right.svg"
                      alt="arrow-right"
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        src="/images/home/articles-main-light.png"
        alt="multicolored abstractive"
        className={style.light}
      />
    </div>
  );
}

export default ArticlesSlider;