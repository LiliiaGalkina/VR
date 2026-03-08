import React, { useState } from "react";
import style from "./faq.module.scss";
import type { PropsFaqItem } from "../../types";

const FaqItem: React.FC<PropsFaqItem> = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? style.itemactive : style.item}>
      <div className={style.itemup}>
        <h4 className={style.itemtitle}>{title}</h4>
        <img
          src="./images/about/faq-arrow.png"
          alt="arrow down"
          className={style.arrow}
          onClick={() => setIsActive(!isActive)}
          style={{
            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
          }}
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
};

export default FaqItem;
