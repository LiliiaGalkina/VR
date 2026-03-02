import TitleBlock from "../TitleBlock/TitleBlock";
import Service from "../Service/Service";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import Subscribe from "../Subscribe/Subscribe";
import Achievements from "../Achievements/Achievements";

const ServicePage = () => {
  return (
	  <main>
		  <div className="container">
      <TitleBlock titletext="OUR Service" />
      <Service />
      <Achievements/>
      <Pricing />
      <Testimonial />
      <Subscribe />
			  
		  </div>
    </main>
  );
};

export default ServicePage;
