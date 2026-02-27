import style from "./articlesblock.module.scss";
import { articles } from "../../data";

const ArticlesBlock = () => {
	return (
    <div className={style.content}>
      <h3 className={style.itemtitle}>Recent Article</h3>
      <div className={style.articles}>
        {articles.map((article) => (
          <div key={article.id} className={style.article}>
            <img src={article.img} alt={article.alt} className={style.image} />
            <div className={style.info}>
              <span>{article.category}</span>
              <p className={style.text}>{article.text}</p>
            </div>
            <div className={style.arrow}>
              <img
                src="/images/home/articles-arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesBlock;