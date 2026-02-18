import style from "./homeservice.module.scss";
import { homeServiceItems } from "../../data";

const HomeService = () => {
    return (
      <section className={style.service}>
        <div className="container">
          <div className={style.infoblock}>
            <div className={style.titles}>
              <h3 className={style.subtitle}>OUR SERVICE</h3>
              <h2 className={style.title}>Our Service</h2>
            </div>
            <p className={style.text}>
              We use the latest VR hardware and software to create high-quality
              VR experiences that are accessible and affordable. Our goal is to
              provide exceptional customer service and support, and our team is
              always available to answer any questions and address any concerns
              you may have.
            </p>
          </div>
          <div className={style.cards}>
            {homeServiceItems.map((item) => (
                <div key={item.id} className={style.card}>
                    <img src={item.img} alt={item.alt} className={style.img}/>
                    <h4 className={style.cardtitle}>{item.title}</h4>
                    <p className={style.cardtext}>{item.text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default HomeService;