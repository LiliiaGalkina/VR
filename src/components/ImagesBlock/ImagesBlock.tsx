import style from "./imagesblock.module.scss";
import type { PropsImagesBlock } from "../../types";
import type React from "react";
import { useEffect, useRef } from "react";
import { leftToRight } from "../../helpers";

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

  useEffect(() => {
    if (gsapfunction) {
      gsapfunction(imagesRef.current);
    }
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
