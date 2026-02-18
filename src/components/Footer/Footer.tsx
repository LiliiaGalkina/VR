import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.up}>
          <div className={style.links}>
            <div className={style.logo}>
              <img src="./images/logo.png" alt="logo" />
            </div>
            <div className={style.social}>
              <div className={style.socialitem}>
                <img
                  src="./images/home/footer-twitter.svg"
                  alt="twitter icon"
                />
              </div>
              <div className={style.socialitem}>
                <img src="./images/home/footer-fb.svg" alt="fb icon" />
              </div>
              <div className={style.socialitem}>
                <img
                  src="./images/home/footer-instagram.svg"
                  alt="instagram icon"
                />
              </div>
              <div className={style.socialitem}>
                <img src="./images/home/footer-github.svg" alt="github icon" />
              </div>
            </div>
          </div>
          <div className={style.columns}>
            <div className={style.column}>
              <h4 className={style.title}>Quicklinks</h4>
              <nav className={style.menu}>
                <a href="#" className={style.menuitem}>
                  Home
                </a>
                <a href="#" className={style.menuitem}>
                  Pricing Plan
                </a>
                <a href="#" className={style.menuitem}>
                  Service
                </a>
                <a href="#" className={style.menuitem}>
                  Blog
                </a>
                <a href="#" className={style.menuitem}>
                  Our Team
                </a>
              </nav>
            </div>
            <div className={style.column}>
              <h4 className={style.title}>Support</h4>
              <nav className={style.menu}>
                <a href="#" className={style.menuitem}>
                  About us
                </a>
                <a href="#" className={style.menuitem}>
                  Contact us
                </a>
                <a href="#" className={style.menuitem}>
                  FAQ
                </a>
                <a href="#" className={style.menuitem}>
                  Tems & Conditions
                </a>
                <a href="#" className={style.menuitem}>
                  Privacy Policy
                </a>
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
