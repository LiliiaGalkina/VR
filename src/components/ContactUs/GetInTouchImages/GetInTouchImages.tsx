import { useEffect, useRef } from "react";
import style from "./getintouchimages.module.scss";
import { disappearAndResize } from "../../../helpers";
import { gsap } from "gsap/gsap-core";
import useResponsiveEvent from "../../../useResponsiveEvent";

const GetInTouchImages = () => {
  const imagesRef = useRef(null);

     const isDesktop = useResponsiveEvent(1024);

     const manageAnimations = (shouldAnimate: boolean) => {
       gsap.killTweensOf([imagesRef.current]);
       if (shouldAnimate) {
           disappearAndResize(imagesRef.current);
       }
     };

     useEffect(() => {
       manageAnimations(isDesktop);
     }, [isDesktop]);

  return (
    <div className={style.circle1} ref={imagesRef}>
      <a href="#" target="_blank" className={style.twitter}>
        <div className={style.inner}>
          <img src="./images/contactus/twitter.svg" alt="twitter" />
        </div>
      </a>
      <a href="#" target="_blank" className={style.fb}>
        <div className={style.inner}>
          <img src="./images/contactus/fb.svg" alt="facebook" />
        </div>
      </a>
      <a href="#" target="_blank" className={style.instagram}>
        <div className={style.inner}>
          <img src="./images/contactus/instagram.svg" alt="twitter" />
        </div>
      </a>
      <div className={style.circle2}>
        <a href="#" target="_blank" className={style.github}>
          <div className={style.inner}>
            <img src="./images/contactus/github.svg" alt="github" />
          </div>
        </a>
        <div className={style.circle3}>
          <div className={style.mainimage}>
            <img
              src="./images/contactus/main-down.png"
              alt="a guy in VR glasses"
              className={style.mainimgdown}
            />
            <img
              src="./images/contactus/main-up.png"
              alt="a guy in VR glasses"
              className={style.mainimgup}
            />
          </div>
          <img
            src="./images/contactus/light.png"
            className={style.light}
            alt="multicolored abstractive"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchImages;
