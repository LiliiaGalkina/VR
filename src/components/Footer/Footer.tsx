import { Link } from "react-router-dom";
import style from "./footer.module.scss";

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
            <Link to={"/"} className={style.logo}>
              <img src="./images/logo.png" alt="logo" />
            </Link>
            <div className={style.social}>
              <a href="#" className={style.socialitem} target="_blank">
                <div className={style.inner}>
                  <img
                    src="./images/home/footer-twitter.svg"
                    alt="twitter icon"
                  />
                </div>
              </a>
              <a href="#" className={style.socialitem} target="_blank">
                <div className={style.inner}>
                  <img src="./images/home/footer-fb.svg" alt="fb icon" />
                </div>
              </a>
              <a href="#" className={style.socialitem} target="_blank">
                <div className={style.inner}>
                  <img
                    src="./images/home/footer-instagram.svg"
                    alt="instagram icon"
                  />
                </div>
              </a>
              <a href="#" className={style.socialitem} target="_blank">
                <div className={style.inner}>
                  <img
                    src="./images/home/footer-github.svg"
                    alt="github icon"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className={style.columns}>
            <div className={style.column}>
              <h4 className={style.title}>Quicklinks</h4>
              <nav className={style.menu}>
                <Link to={"/"} className={style.menuitem}>
                  Home
                </Link>
                <Link to={"/pricing"} className={style.menuitem}>
                  Pricing Plan
                </Link>
                <Link to={"/service"} className={style.menuitem}>
                  Service
                </Link>
                <Link to={"/blog"} className={style.menuitem}>
                  Blog
                </Link>
                <Link to={"/team"} className={style.menuitem}>
                  Our Team
                </Link>
              </nav>
            </div>
            <div className={style.column}>
              <h4 className={style.title}>Support</h4>
              <nav className={style.menu}>
                <Link to={"/about"} className={style.menuitem}>
                  About us
                </Link>
                <Link to={"/contacts"} className={style.menuitem}>
                  Contact us
                </Link>
                <Link to={"/faq"} className={style.menuitem}>
                  FAQ
                </Link>
                <Link to={"/terms"} className={style.menuitem}>
                  Tems & Conditions
                </Link>
                <Link to={"/policy"} className={style.menuitem}>
                  Privacy Policy
                </Link>
              </nav>
            </div>
            <div className={style.contacts}>
              <h4 className={style.title}>Need Help?</h4>
              <div className={style.contact}>
                <img
                  src="./images/home/footer-icon-location.svg"
                  alt="location"
                />
                <address>Tanjung Sari Street no.48, Pontianak City</address>
              </div>
              <div className={style.contact}>
                <img src="./images/home/footer-icon-message.svg" alt="email" />
                <span>Support@VRNas.com</span>
              </div>
              <div className={style.contact}>
                <img src="./images/home/footer-icon-phone.svg" alt="phone" />
                <span>+123 456 7890</span>
              </div>
            </div>
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
