import style from "./aboutwhychoose.module.scss";
import ImagesBlock from "../ImagesBlock/ImagesBlock";
import WhyChooseContentBlock from "../WhyChooseContentBlock/WhyChooseContentBlock";

const AboutWhyChoose = () => {
  return (
    <section className={style.whychoose}>
      <div className={style.items}>
        <div className={style.itemimages}>
          <ImagesBlock
            mainimage="./images/about/whychooseus-mainimage.png"
            mainimagealt="guy in VR glasses runs"
            video="./images/about/whychooseus-video.png"
            videoalt="VR glasses"
            light="./images/about/whychooseuse-light.png"
            bg="./images/home/about-main-bg.png"
          />
        </div>
        <div className={style.iteminfo}>
          <WhyChooseContentBlock />
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
