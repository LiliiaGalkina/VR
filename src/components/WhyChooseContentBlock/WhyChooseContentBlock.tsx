import style from "./whychoosecontentblock.module.scss";
import WhyChooseContentItem from "./WhyChooseContentItem";
import { whyChooseItems } from "../../data";
import { useEffect, useRef } from "react";
import { downToUp } from "../../helpers";

const WhyChooseContentBlock = () => {
	const contentRef = useRef(null);

	useEffect(() => {
		downToUp(contentRef.current)
	}, [])

	return (
    <div className={style.content} ref={contentRef}>
      <h3 className={style.subtitle}>WHY CHOOSE US</h3>
      <h2 className={style.title}>Why Choose Us for Your VR Needs</h2>
      <div className={style.block}>
       {whyChooseItems.map((item) => (
        <WhyChooseContentItem key={item.id} {...item}/>
       ))}
       
      </div>
    </div>
  );
}

export default WhyChooseContentBlock;