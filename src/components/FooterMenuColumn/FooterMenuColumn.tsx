import style from "./footermenucolumn.module.scss";
import { footerMenuItems } from "../../data";
import { Link } from "react-router-dom";
import type { PropsFooterMenuItemsCount } from "../../types";
import type React from "react";

const FooterMenuColumn: React.FC<PropsFooterMenuItemsCount> = ({min, max}) => {
	return (
    <nav className={style.menu}>
      {footerMenuItems.slice(min, max).map((item) => (
        <Link to={item.path} key={item.id} className={style.menuitem}>
         {item.name}
        </Link>
      ))}
 
    </nav>
  );
}
 
export default FooterMenuColumn;