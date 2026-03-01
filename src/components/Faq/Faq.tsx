import style from "./faq.module.scss";
import { faqItems } from "../../data";
import FaqItem from "./FaqItem";

const Faq = () => {

  return (
    <section className={style.faq}>
      <h3 className={style.subtitle}>FAQ</h3>
      <h2 className={style.title}>Frequently Asked Questions</h2>
      <p className={style.text}>
        At VRNas, we want to make sure that you have all the information you
        need to make informed decisions about our VR services. Here are some of
        the most common questions we receive:
      </p>
      <div className={style.items}>
        {faqItems.map((faqitem) => (
          <FaqItem id={faqitem.id} title={faqitem.title} text={faqitem.text}/>
        ))}
      </div>
      <img
        src="/images/about/faq-light.png"
        alt="multicolored abstractive"
        className={style.light}
      />
    </section>
  );
};

export default Faq;
