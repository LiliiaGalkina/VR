import style from "./teampage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import { team } from "../../data";
import TeamItem from "../Team/TeamItem";
import Achievements from "../Achievements/Achievements";
import Subscribe from "../Subscribe/Subscribe";

const TeamPage = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Our Team" />
        <section className={style.teampage}>
          <h3 className={style.subtitle}>OUR TEAM</h3>
          <h2 className={style.title}>Meet Our Amazing Team</h2>
          <div className={style.items}>
            {team.map((item) => (
              <TeamItem key={item.id} {...item} />
            ))}
          </div>
        </section>
        <Achievements />
        <Subscribe />
      </div>
    </main>
  );
};

export default TeamPage;
