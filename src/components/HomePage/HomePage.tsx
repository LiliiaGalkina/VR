import HomeHero from "../HomeHero/HomeHero";
import HomeAbout from "../HomeAbout/HomeAbout";
import Service from "../Service/Service";
import WhyChooseUs from "../WhyChooseUS/WhyChooseUs";
import DreamsToLife from "../DreamsToLife/DreamsToLife";
import Testimonial from "../Testimonial/Testimonial";
import Pricing from "../Pricing/Pricing";
import Partners from "../Partners/Partners";
import Articles from "../Articles/Articles";
import Subscribe from "../Subscribe/Subscribe";

const HomePage = () => {
    return (
        <main>
            <HomeHero/>
            <HomeAbout/>
            <Service/>
            <WhyChooseUs/>
            <DreamsToLife/>
			<Testimonial />
			<Pricing />
			<Partners />
			<Articles />
			<Subscribe/>
        </main>
    )
}

export default HomePage