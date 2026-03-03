import style from "./privacypolicy.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import Subscribe from "../Subscribe/Subscribe";

const PrivacyPolicy = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Privacy Policy" />
      </div>
      <div className={style.wrapper}>
        <div className="container">
          <section className={style.policy}>
            <h3 className={style.subtitle}>Privacy Policy</h3>
            <h2 className={style.title}>Privacy Policy</h2>
            <p className={style.text}>
              This Privacy Policy describes how [Company Name] collects, uses,
              and protects the personal information of our website visitors and
              customers.
            </p>
            <h4 className={style.blocktitle}>Information We Collect</h4>
            <p className={style.listtext}>
              We may collect the following types of personal information:
            </p>
            <ul className={style.list}>
              <li className={style.listitem}>
                Name, email address, and other contact information.
              </li>
              <li className={style.listitem}>
                Demographic information such as age, gender, and location.
              </li>
              <li className={style.listitem}>
                Payment information such as credit card details.
              </li>
              <li className={style.listitem}>
                Information about how you use our website and services.
              </li>
            </ul>
            <h4 className={style.blocktitle}>How We Use Your Information</h4>
            <p className={style.listtext}>
              We may use your personal information for the following purposes:
            </p>
            <ul className={style.list}>
              <li className={style.listitem}>
                To provide you with our services and products.
              </li>
              <li className={style.listitem}>
                To process payments and fulfill orders.
              </li>
              <li className={style.listitem}>
                To send you marketing and promotional materials.
              </li>
              <li className={style.listitem}>
                To improve our website and services.
              </li>
            </ul>
            <h4 className={style.blocktitle}>
              How We Protect Your Information
            </h4>
            <p className={style.blocktext}>
              We implement a variety of security measures to maintain the safety
              of your personal information when you place an order or enter,
              submit, or access your personal information. We use encryption to
              protect sensitive information transmitted online, and we also
              protect your information offline.
            </p>
            <h4 className={style.blocktitle}>Information Sharing</h4>
            <p className={style.blocktext}>
              We do not sell or rent your personal information to third parties.
              However, we may share your information with our trusted
              third-party service providers who assist us in operating our
              website and services.
            </p>
            <h4 className={style.blocktitle}>Cookies and Tracking</h4>
            <p className={style.blocktext}>
              We use cookies and other tracking technologies to collect
              information about your browsing behavior and preferences. This
              information is used to personalize your experience on our website
              and to analyze how visitors use our website.
            </p>
            <h4 className={style.blocktitle}>Your Rights</h4>
            <p className={style.blocktext}>
              You have the right to access, update, or delete your personal
              information. You can contact us using the information provided on
              our contact page to exercise these rights.
            </p>
            <h4 className={style.blocktitle}>Changes to Privacy Policy</h4>
            <p className={style.blocktext}>
              We reserve the right to update this Privacy Policy at any time. We
              will notify you of any changes by posting the new Privacy Policy
              on our website.
            </p>
            <h4 className={style.blocktitle}>Contact Us</h4>
            <p className={style.blocktext}>
              If you have any questions about our Privacy Policy, please contact
              us using the information provided on our contact page.
            </p>
          </section>
          <Subscribe />
        </div>
        <img
          src="/images/faq/decor.png"
          alt="a guy in VR glasses"
          className={style.leftdecor}
        />
        <img
          src="/images/faq/decor.png"
          alt="a guy in VR glasses"
          className={style.rightdecor}
        />
      </div>
    </main>
  );
};

export default PrivacyPolicy;