import style from "./homehero.module.scss";
import ButtonColor from "../ButtonColor/ButtonColor";
import HomeHeroCards from "../HomeHeroCards/HomeHeroCards";
import { Link } from "react-router-dom";
import { itemsDownUPNoTrigger, rightToLeftNoTrigger } from "../../helpers";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";

const HomeHero = () => {
	const contentRef = useRef<HTMLDivElement>(null);
	const imagesRef = useRef(null);

	useLayoutEffect(() => {
		itemsDownUPNoTrigger(contentRef.current);
		rightToLeftNoTrigger(imagesRef.current);
		 return () => {
       gsap.killTweensOf(contentRef.current);
       gsap.killTweensOf(imagesRef.current);
     };
	}, []);

  return (
    <section className={style.hero}>
      <div className={style.items}>
        <div className={style.content} ref={contentRef}>
          <h1 className={style.title}>Immerse Yourself in Virtual Reality</h1>
          <p className={style.text}>
            Experience Unforgettable Events in VR. Bring your events to life
            like never before with our VR services
          </p>
          <Link to={"/service"} className={style.button}>
            <ButtonColor textButton="discover more" />
          </Link>
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
        <div className={style.images} ref={imagesRef}>
          <div className={style.maimimage}>
            <img
              src="./images/home/hero-main.png"
              alt="a guy in a white shirt and virtual reality glasses"
            />
          </div>
          <div className={style.imagelight}>
            <img
              src="./images/home/hero-main-decor.png"
              alt="multicolored abstraction"
            />
          </div>
        </div>
      </div>
      <div className={style.decorbottom}>
        <img src="./images/home/hero-decor-bottom-left.png" alt="fon decor" />
      </div>
      <HomeHeroCards />
    </section>
  );
};

export default HomeHero;
