import style from "./faqpage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import Faq from "../Faq/Faq";
import Subscribe from "../Subscribe/Subscribe";

const FaqPage = () => {
    return (
      <main>
        <div className="container">
          <TitleBlock titletext="FAQ" />
        </div>
        <div className={style.wrapper}>
          <div className="container">
            <Faq />
            <Subscribe/>
          </div>
          <img
            src="/images/faq/decor.png"
            alt="a guy in VR glasses"
            className={style.leftdecor}
          />
          <img
            src="/images/faq/decor.png"
            alt="a guy in VR glasses"
            className={style.rightdecor}
          />
        </div>
      </main>
    );
}

export default FaqPage;