import style from "./imagesblock.module.scss";
import type { PropsImagesBlock } from "../../types";
import type React from "react";
import { useEffect, useRef } from "react";
import useResponsiveEvent from "../../useResponsiveEvent";
import { gsap } from "gsap/gsap-core";

const ImagesBlock: React.FC<PropsImagesBlock> = ({
  mainimage,
  mainimagealt,
  video,
  videoalt,
  light,
  bg,
  gsapfunction,
}) => {
  const imagesRef = useRef(null);

  const isDesktop = useResponsiveEvent(1024);

  const manageAnimations = (shouldAnimate: boolean) => {
    gsap.killTweensOf([imagesRef.current]);
    if (shouldAnimate) {
      if (gsapfunction) {
        gsapfunction(imagesRef.current);
      }
    }
  };

  useEffect(() => {
    manageAnimations(isDesktop);
  }, [isDesktop]);

  return (
    <div className={style.images} ref={imagesRef}>
      <div className={style.image}>
        <img src={mainimage} alt={mainimagealt} />
      </div>
      <img src={bg} className={style.bg} alt="purple rectangle" />
      <img src={light} className={style.light} alt="multicolored abstraction" />
      <img src={video} className={style.video} alt={videoalt} />
    </div>
  );
};

export default ImagesBlock;
