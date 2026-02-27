import style from "./imagesblock.module.scss";
import type { PropsImagesBlock } from "../../types";
import type React from "react";

const ImagesBlock: React.FC<PropsImagesBlock> = ({mainimage, mainimagealt, video, videoalt, light, bg}) => {
	return (
    <div className={style.images}>
      <div className={style.image}>
        <img
          src={mainimage}
          alt={mainimagealt}
        />
      </div>
      <img
        src={bg}
        className={style.bg}
        alt="purple rectangle"
      />
      <img
        src={light}
        className={style.light}
        alt="multicolored abstraction"
      />
      <img
        src={video}
        className={style.video}
        alt={videoalt}
      />
    </div>
  );
}

export default ImagesBlock;