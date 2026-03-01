import style from "./servicepage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import Service from "../Service/Service";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import Subscribe from "../Subscribe/Subscribe";
import { achievements } from "../../data";

const ServicePage = () => {
  return (
	  <main>
		  <div className="container">
      <TitleBlock titletext="OUR Service" />
      <Service />
      <div className={style.achievements}>
        {achievements.map((item) => (
          <div className={style.item} key={item.id}>
            <h3 className={style.title}>{item.title}</h3>
            <span className={style.text}>{item.text}</span>
          </div>
		))}
				  <img src="/images/service/bg.png" alt="multicolored abstractive" className={style.bg} />
      </div>
      <Pricing />
      <Testimonial />
      <Subscribe />
			  
		  </div>
    </main>
  );
};

export default ServicePage;
