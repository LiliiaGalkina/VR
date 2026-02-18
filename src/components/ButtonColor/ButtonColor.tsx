import type React from "react";
import style from "./buttoncolor.module.scss";

import type { PropsButton } from "../../types";

const ButtonColor: React.FC<PropsButton> = ({ textButton }) => {
  return <div className={style.button}>{textButton}</div>;
};

export default ButtonColor;
