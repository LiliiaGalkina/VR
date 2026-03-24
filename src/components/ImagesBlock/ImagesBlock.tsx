import style from "./imagesblock.module.scss";
import type { PropsImagesBlock } from "../../types";
import type React from "react";
import {useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
    if (gsapfunction) {
      gsapfunction(imagesRef.current);
    }
    return () => {
      gsap.killTweensOf(imagesRef.current);
    };
  }, []);

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
