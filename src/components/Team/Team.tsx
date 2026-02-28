import style from "./team.module.scss";
import ButtonBorder from "../ButtonBorder/ButtonBorder";
import { team } from "../../data";

const Team = () => {
  return (
    <section className={style.team}>
      <h3 className={style.subtitle}>OUR TEAM</h3>
      <div className={style.titleblock}>
        <h2 className={style.title}>Our Professionals Team</h2>
        <div className={style.button}>
          <ButtonBorder textButton="see all" />
        </div>
      </div>
      <div className={style.items}>
        {team.map((item) => (
          <div className={style.item}>
            <div className={style.inneritem}>
              <img src={item.image} alt={item.alt} />
              <img
                src="/images/about/team-bg.png"
                alt="bg rectangle"
                className={style.bg}
              />
            </div>
            <div className={style.legend}>
              <span className={style.name}>{item.name}</span>
              <span className={style.position}>{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
