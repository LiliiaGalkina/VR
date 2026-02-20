import style from "./pricing.module.scss";
import { pricing } from "../../data";
import ButtonColor from "../ButtonColor/ButtonColor";

const Pricing = () => {
  return (
    <section className={style.pricing}>
      <div className="container">
        <h3 className={style.subtitle}>our pricing</h3>
        <h2 className={style.title}>Affordable VR Services for Everyone</h2>
        <p className={style.text}>
          At VRNas, we believe that everyone should have access to the benefits
          of VR. That's why we offer a range of pricing options to meet the
          needs of any budget.
        </p>
        <div className={style.items}>
          <div className={style.content}>
            {pricing.map((item) => (
              <div key={item.id} className={style.pricingitem}>
                <div className={style.colored}>
                  <div className={style.img}>
                    <img src="/images/home/pricing-cloud.svg" alt="cloud" />
                  </div>
                </div>
                <div>
                  <h4 className={style.itemtitle}>{item.title}</h4>
                  <p className={style.itemtext}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.emptyblock}></div>
          <img
            src="/images/home/pricing-light.png"
            alt="multicolored abstraction"
            className={style.light}
          />
          <div className={style.started}>
            <span className={style.headtext}>Start from</span>
            <span className={style.price}>$99</span>
            <div className={style.button}>
              <ButtonColor textButton="get started" />
            </div>
            <span className={style.footertext}>
              30 Days Moneyback Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
