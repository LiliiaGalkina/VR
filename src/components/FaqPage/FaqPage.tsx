import TitleBlock from "../TitleBlock/TitleBlock";
import Faq from "../Faq/Faq";
import FaqTermsWrapper from "../FaqTermsWrapper/FaqTermsWrapper";

const FaqPage = () => {
    return (
      <main>
        <div className="container">
          <TitleBlock titletext="FAQ" />
        </div>
			<FaqTermsWrapper>{<Faq/> }</FaqTermsWrapper>
      </main>
    );
}

export default FaqPage;