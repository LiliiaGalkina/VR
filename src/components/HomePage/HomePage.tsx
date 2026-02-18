import HomeHero from "../HomeHero/HomeHero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeService from "../HomeService/HomeService";
import WhyChooseUs from "../WhyChooseUS/WhyChooseUs";
import DreamsToLife from "../DreamsToLife/DreamsToLife";

const HomePage = () => {
    return (
        <main>
            <HomeHero/>
            <HomeAbout/>
            <HomeService/>
            <WhyChooseUs/>
            <DreamsToLife/>
        </main>
    )
}

export default HomePage