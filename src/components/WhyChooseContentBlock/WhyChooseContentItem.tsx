import React, { useState } from "react";
import style from "./whychoosecontentblock.module.scss";
import type { PropsWhyChoose } from "../../types";

 const WhyChooseContentItem:React.FC<PropsWhyChoose> = ({title, text}) => {
      const [isActive, setIsActive] = useState(false);

    return (
      <div className={style.item}>
        <div className={style.itemup}>
          <h4 className={style.itemtitle}>{title}</h4>
          <img
            src="/images/home/choose-arrow.svg"
            onClick={() => setIsActive(!isActive)}
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
            }}
            alt="arrow down"
            className={style.arrow}
          />
        </div>
        <p
          className={style.itemtext}
          style={{ display: isActive ? "block" : "none" }}
        >
          {text}
        </p>
      </div>
    );
 }

 export default WhyChooseContentItem;