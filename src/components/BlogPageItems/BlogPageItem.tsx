import style from "./blogpageitems.module.scss";
import type { IBlogItems } from "../../types";
import type React from "react";
import { Link } from "react-router-dom";

const BlogPageItem: React.FC<IBlogItems> = ({
  id,
  image,
  alt,
  beige,
  title,
}) => {
  return (
    <div key={id} className={style.item}>
      <img src={image} alt={alt} className={style.image} />
      <div className={style.info}>
        <span className={style.beige}>{beige}</span>
        <h3 className={style.title}>{title}</h3>
        <Link className={style.button}>READ MORE</Link>
      </div>
    </div>
  );
};

export default BlogPageItem;
