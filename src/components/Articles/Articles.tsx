import style from "./articles.module.scss";
import ButtonBorder from "../ButtonBorder/ButtonBorder";
import ArticlesSlider from "../ArticlesSlider/ArticlesSlider";
import ArticlesBlock from "../ArticlesBlock/ArticlesBlock";

const Articles = () => {
  return (
    <section className={style.ourarticles}>
      <h3 className={style.subtitle}>OUR ARTICLES</h3>
      <div className={style.titleblock}>
        <h2 className={style.title}>Stay Up-to-Date with Our VR Insights</h2>
        <div className={style.mainbutton}>
          <ButtonBorder textButton="SEE ALL" />
        </div>
      </div>
      <div className={style.items}>
        <ArticlesSlider />
        <ArticlesBlock />
      </div>
    </section>
  );
};

export default Articles;
