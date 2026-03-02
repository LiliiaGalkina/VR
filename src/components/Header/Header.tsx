import style from "./header.module.scss";
import ButtonBorder from "../ButtonBorder/ButtonBorder";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={"/"} className={style.logo}>
            <img src="./images/logo.png" alt="logo" />
          </Link>
          <nav className={style.menu}>
            <div
             className={isMenuOpen ? style.burgeractive : style.burger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </div>
            <ul className={isMenuOpen ? style.menulistactive : style.menulist}>
              <li className={style.menuitem}>
                <Link to={"/"} className={style.menulink}>
                  Home
                </Link>
              </li>
              <li className={style.menuitem}>
                <Link to={"/about"} className={style.menulink}>
                  About us
                </Link>
              </li>
              <li className={style.menuitem}>
                <Link to={"/service"} className={style.menulink}>
                  Service
                </Link>
              </li>
              <li className={style.menuitem}>
                <Link to={"/pricing"} className={style.menulink}>
                  Pricing
                </Link>
              </li>
              <li className={style.menuitem}>
                <Link to={"./blog"} className={style.menulink}>
                  Blog
                </Link>
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
