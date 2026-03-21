import style from "./social.module.scss";
import SocialItem from "./SocialItem";
import { socialItems } from "../../data";

const Social = () => {
	return (
    <div className={style.social}>
			{socialItems.map((item) => <SocialItem key={item.id} {...item} />)}
    </div>
  );
}
 
export default Social;