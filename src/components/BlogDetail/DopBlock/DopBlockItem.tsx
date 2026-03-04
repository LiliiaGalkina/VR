import type React from "react";
import style from "./dopblockitem.module.scss";
import type { IBlogItems } from "../../../types";
import { Link } from "react-router-dom";

const DopBlockItem: React.FC<IBlogItems> = ({id, image, alt, beige, title}) => {
    return (
      <Link to={`/blog/${id}`} className={style.article}>
        <img src={image} alt={alt} className={style.image} />
        <div>
          <span className={style.beige}>{beige}</span>
          <p className={style.title}>{title}</p>
        </div>
      </Link>
    );
}

export default DopBlockItem;