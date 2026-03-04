import style from "./pricingplans.module.scss";
import type { PropsPricingPlan } from "../../types";
import type React from "react";
import ButtonBorder from "../ButtonBorder/ButtonBorder";

const PricingPlan: React.FC<PropsPricingPlan> = ({
  name,
  price,
  otheritem,
}) => {
  return (
    <div className={style.card}>
      <div>
        <h4 className={style.name}>{name}</h4>
        <p className={style.price}>
          ${price}
          <span>/month</span>
        </p>
        <p className={style.itemtext}>
          All the basic features to boost your freelance career
        </p>
        <ul className={style.list}>
          <li className={style.listitem}>
            Access to a selection of VR games and experiences
          </li>
          <li className={style.listitem}>
            Limited access to educational content
          </li>
          <li className={style.listitem}>
            Limited access to architecture and design tools
          </li>
          <li className={style.listitem}>{otheritem}</li>
        </ul>
      </div>
      <ButtonBorder textButton="Get 14 Days Free Trial" />
    </div>
  );
};

export default PricingPlan;
