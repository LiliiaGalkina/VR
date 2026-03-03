import style from "./whychooseus.module.scss";
import ImagesBlock from "../ImagesBlock/ImagesBlock";
import WhyChooseContentBlock from "../WhyChooseContentBlock/WhyChooseContentBlock";

const WhyChooseUs = () => {
  return (
    <div className={style.whychoose}>
      <div className={style.items}>
        <WhyChooseContentBlock />
        <ImagesBlock
          mainimage="/images/home/choose-main.png"
          mainimagealt="a guy wearing virtual reality glasses with his hand next to chest"
          video="/images/home/choose-video.png"
          videoalt="virtual reality glasses"
          light="/images/home/choose-light.png"
          bg="/images/home/choose-bg.png"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
