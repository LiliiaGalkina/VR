import style from "./header.module.scss";
import ButtonBorder from "../ButtonBorder/ButtonBorder";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={style.header}>
      <img
        src="/images/home/header-decor-up.png"
        alt="multicolored abstractive"
        className={style.headerdecor}
      />
      <div className="container">
        <div className={style.items}>
          <a href="#" className={style.logo}>
            <img src="./images/logo.png" alt="logo" />
          </a>
          <nav className={style.menu}>
            <div
             className={isMenuOpen ? style.burgeractive : style.burger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </div>
            <ul className={isMenuOpen ? style.menulistactive : style.menulist}>
              <li className={style.menuitem}>
                <a href="#" className={style.menulink}>
                  Home
                </a>
              </li>
              <li className={style.menuitem}>
                <a href="#" className={style.menulink}>
                  About us
                </a>
              </li>
              <li className={style.menuitem}>
                <a href="#" className={style.menulink}>
                  Service
                </a>
              </li>
              <li className={style.menuitem}>
                <a href="#" className={style.menulink}>
                  Page
                </a>
              </li>
              <li className={style.menuitem}>
                <a href="#" className={style.menulink}>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className={style.button}>
            <ButtonBorder textButton="Contact us" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
