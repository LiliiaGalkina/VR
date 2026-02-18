import type React from "react";
import style from "./buttonborder.module.scss";

import type { PropsButton } from "../../types";

const ButtonBorder: React.FC<PropsButton> = ({textButton}) => {
    return (
        <div className={style.button}>{textButton}</div>
    )
}

export default ButtonBorder;