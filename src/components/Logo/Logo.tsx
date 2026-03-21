import style from "./logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
    <Link to={"/"} className={style.logo}>
      <img src="./images/logo.png" alt="logo" />
    </Link>
  );
}
 
export default Logo;