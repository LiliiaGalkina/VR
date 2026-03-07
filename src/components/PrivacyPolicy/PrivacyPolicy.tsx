import TitleBlock from "../TitleBlock/TitleBlock";
import FaqTermsWrapper from "../FaqTermsWrapper/FaqTermsWrapper";
import PrivatPolicyItems from "./PrivatPolicyItems";


const PrivacyPolicy = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Privacy Policy" />
      </div>
		  <FaqTermsWrapper>{<PrivatPolicyItems/> }</FaqTermsWrapper>
    </main>
  );
};

export default PrivacyPolicy;