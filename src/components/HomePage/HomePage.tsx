import HomeHero from "../HomeHero/HomeHero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeService from "../HomeService/HomeService";
import WhyChooseUs from "../WhyChooseUS/WhyChooseUs";
import DreamsToLife from "../DreamsToLife/DreamsToLife";
import Testimonial from "../Testimonial/Testimonial";
import Pricing from "../Pricing/Pricing";
import Partners from "../Partners/Partners";

const HomePage = () => {
    return (
        <main>
            <HomeHero/>
            <HomeAbout/>
            <HomeService/>
            <WhyChooseUs/>
            <DreamsToLife/>
			<Testimonial />
			<Pricing />
			<Partners/>
        </main>
    )
}

export default HomePage