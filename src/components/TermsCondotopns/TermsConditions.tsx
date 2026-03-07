import TitleBlock from "../TitleBlock/TitleBlock";
import TermConditionsContent from "./TermsConditionsContent";
import FaqTermsWrapper from "../FaqTermsWrapper/FaqTermsWrapper";

const TermsConditions = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Tems & Conditions" />
      </div>
      <FaqTermsWrapper>{<TermConditionsContent />}</FaqTermsWrapper>
    </main>
  );
};

export default TermsConditions;
