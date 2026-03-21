import style from "./social.module.scss";

import type { PropsSocialItems } from "../../types";
import type React from "react";

const SocialItem: React.FC<PropsSocialItems> = ({image, alt}) => {
	return (
    <a href="#" className={style.socialitem} target="_blank">
      <div className={style.inner}>
        <img src={image} alt={alt} />
      </div>
    </a>
  );
}
 
export default SocialItem;