import TitleBlock from "../TitleBlock/TitleBlock";
import PricingPlans from "../PricingPlans/PricingPlans";
import AboutWhyChoose from "../AboutWhyChoose/AboutWhyChoose";
import Faq from "../Faq/Faq";
import Subscribe from "../Subscribe/Subscribe";

const PricingPage = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Pricing Plan" />
        <PricingPlans />
        <AboutWhyChoose />
        <Faq />
        <Subscribe />
      </div>
    </main>
  );
};

export default PricingPage;
