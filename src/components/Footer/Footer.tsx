import style from "./footer.module.scss";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import FooterMenuColumn from "../FooterMenuColumn/FooterMenuColumn";
import FooterContacts from "../FooterContacts/FooterContacts";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img
        src="./images/home/footer-decor.png"
        alt="multicolored abstractive"
        className={style.decor}
      />
      <div className="container">
        <div className={style.up}>
          <div className={style.links}>
            <Logo />
            <Social />
          </div>
          <div className={style.columns}>
            <div className={style.column}>
              <h4 className={style.title}>Quicklinks</h4>
              <FooterMenuColumn min={0} max={5} />
            </div>
            <div className={style.column}>
              <h4 className={style.title}>Support</h4>
						  <FooterMenuColumn min={5} max={10}/>
            </div>
           <FooterContacts/>
          </div>
        </div>
        <div className={style.down}>
          <p className={style.copyright}>
            &copy; Copyright 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
