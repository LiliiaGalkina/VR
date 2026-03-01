import style from "./pricingplans.module.scss";
import PricingPlan from "./PricingPlan";
import { pricingPlans } from "../../data";

const PricingPlans = () => {
	return (
    <section className={style.pricing}>
      <h3 className={style.subtitle}>PRICING</h3>
      <h2 className={style.title}>Pricing Plans</h2>
      <p className={style.text}>
        Choose the pricing plan that fits your needs and budget. All plans come
        with a free trial period so you can test out our service and see which
        plan works best for you.
      </p>
			<div className={style.cards}>
				{pricingPlans.map((item) => (
					<PricingPlan id={item.id} name={item.name} price={item.price} otheritem={item.otheritem} />
				))}
	  </div>
    </section>
  );
}

export default PricingPlans;