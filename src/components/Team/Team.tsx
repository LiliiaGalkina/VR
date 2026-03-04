import style from "./team.module.scss";
import ButtonBorder from "../ButtonBorder/ButtonBorder";
import { team } from "../../data";
import type { PropsTeam } from "../../types";
import type React from "react";
import TeamItem from "../TeamItem/TeamItem";
import { Link } from "react-router-dom";

const Team:React.FC<PropsTeam> = ({count}) => {
  return (
    <section className={style.team}>
      <h3 className={style.subtitle}>OUR TEAM</h3>
      <div className={style.titleblock}>
        <h2 className={style.title}>Our Professionals Team</h2>
        <Link to={"/team"} className={style.button}>
          <ButtonBorder textButton="see all" />
        </Link>
      </div>
      <div className={style.items}>
        {team.slice(0, count).map((item) => (
			<TeamItem key={item.id} {...item}/>
        ))}
      </div>
    </section>
  );
};

export default Team;
