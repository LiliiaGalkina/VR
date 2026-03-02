import style from "./achievements.module.scss";
import { achievements } from "../../data";

const Achievements = () => {
	return (
    <div className={style.achievements}>
      {achievements.map((item) => (
        <div className={style.item} key={item.id}>
          <h3 className={style.title}>{item.title}</h3>
          <span className={style.text}>{item.text}</span>
        </div>
      ))}
      <img
        src="/images/service/bg.png"
        alt="multicolored abstractive"
        className={style.bg}
      />
    </div>
  );
}

export default Achievements;