import style from "./titleblock.module.scss";
import type { PropsTitle } from "../../types";
import type React from "react";
import { Link } from "react-router-dom";


const TitleBlock:React.FC<PropsTitle> = ({titletext}) => {
	return (
    <section className={style.titleblock}>
      <h2 className={style.title}>{titletext}</h2>
      <div className={style.breadcrumbs}>
        <Link to={"/"} className={style.link}>
          Home
        </Link>
        <img src="/images/about/titleblock-arrow.svg" alt="arrow right" />
        <span className={style.text}>{titletext}</span>
      </div>
      <img
        src="/images/about/titleblock-light.png"
        alt="multicolor abstractive"
        className={style.light}
      />
    </section>
  );
}

export default TitleBlock;