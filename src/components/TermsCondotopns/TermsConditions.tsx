import style from "./../FaqPage/faqpage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import TermConditionsContent from "./TermsConditionsContent";
import Subscribe from "../Subscribe/Subscribe";

const TermsConditions = () => {
	    return (
        <main>
          <div className="container">
            <TitleBlock titletext="Tems & Conditions" />
          </div>
          <div className={style.wrapper}>
            <div className="container">
             <TermConditionsContent/>
              <Subscribe />
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

export default TermsConditions;