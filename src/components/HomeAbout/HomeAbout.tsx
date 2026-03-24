import style from "./homeabout.module.scss";
import ButtonColor from "../ButtonColor/ButtonColor";
import ImagesBlock from "../ImagesBlock/ImagesBlock";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { itemsDownUP } from "../../helpers";
import { leftToRight } from "../../helpers";
import { gsap } from "gsap/gsap-core";
import useResponsiveEvent from "../../useResponsiveEvent";

const HomeAbout = () => {
  const contentRef = useRef(null);

    const isDesktop = useResponsiveEvent(1024);

    const manageAnimations = (shouldAnimate: boolean) => {
      gsap.killTweensOf([contentRef.current]);
      if (shouldAnimate) {
        itemsDownUP(contentRef.current);
      }
    };

    useEffect(() => {
      manageAnimations(isDesktop);
    }, [isDesktop]);


  return (
    <section className={style.about}>
      <div className={style.items}>
        <ImagesBlock
          mainimage="./images/home/about-main.png"
          mainimagealt="a guy wearing virtual reality glasses with his hand raised"
          video="./images/home/about-video.png"
          videoalt="virtual reality glasses"
          light="./images/home/about-main-light.png"
          bg="./images/home/about-main-bg.png"
          gsapfunction={leftToRight}
        />
        <div className={style.content} ref={contentRef}>
          <h3 className={style.subtitle}>ABOUT US</h3>
          <h2 className={style.title}>
            Bring your events to life like never before with our VR services.
          </h2>
          <p className={style.text}>
            VRNas is a leading provider of VR services for education,
            entertainment, architecture, and events. Our mission is to bring the
            power of virtual reality to everyone, allowing them to explore new
            worlds, learn in new ways, and experience events in a whole new
            light.
          </p>
          <ul className={style.list}>
            <li className={style.listitem}>
              <img src="./images/home/about-checkbox.svg" alt="checkbox" />
              <span>Cutting-Edge Technology</span>
            </li>
            <li className={style.listitem}>
              <img src="./images/home/about-checkbox.svg" alt="checkbox" />
              <span>Versatile Applications</span>
            </li>
            <li className={style.listitem}>
              <img src="./images/home/about-checkbox.svg" alt="checkbox" />
              <span>Affordable and Accessible</span>
            </li>
          </ul>
          <Link to={"/about"} className={style.button}>
            <ButtonColor textButton="read more" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
