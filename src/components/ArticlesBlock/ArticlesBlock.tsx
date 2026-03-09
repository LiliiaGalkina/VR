import style from "./articlesblock.module.scss";
import { blogItems } from "../../data";
import { Link } from "react-router-dom";

const ArticlesBlock = () => {
	return (
    <div className={style.content}>
      <h3 className={style.itemtitle}>Recent Article</h3>
      <div className={style.articles}>
        {blogItems.map((article) => (
          <Link
            to={`/blog/${article.id}`}
            key={article.id}
            className={style.article}
          >
            <img
              src={article.image}
              alt={article.alt}
              className={style.image}
            />
            <div className={style.info}>
              <span>{article.beige}</span>
              <p className={style.text}>{article.title}</p>
            </div>
            <div className={style.arrow}>
              <img
                src="./images/home/articles-arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticlesBlock;