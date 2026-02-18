import HomeHero from "../HomeHero/HomeHero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeService from "../HomeService/HomeService";
import WhyChooseUs from "../WhyChooseUS/WhyChooseUs";
import DreamsToLife from "../DreamsToLife/DreamsToLife";
import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
    return (
        <main>
            <HomeHero/>
            <HomeAbout/>
            <HomeService/>
            <WhyChooseUs/>
            <DreamsToLife/>
            <Testimonial/>
        </main>
    )
}

export default HomePage