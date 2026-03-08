import style from "./contactuspage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import ContactItems from "./ContactItems/ContactItems";
import GetInTouch from "./GetInTouch/GetInTouch";
import Subscribe from "../Subscribe/Subscribe";

const ContactUsPage = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Contact Us" />
        <ContactItems />
        <GetInTouch />
        <div className={style.mapblock}>
          <div className={style.map}>
            <img src="./images/contactus/map.png" className={style.mapimg} alt="map" />
            <div className={style.location}>
              <div className={style.inner}>
                <img
                  src="./images/contactus/icon-location.svg"
                  alt="location icon"
                />
              </div>
            </div>
          </div>
			  </div>
			  <Subscribe/>
      </div>
    </main>
  );
};

export default ContactUsPage;
