import style from "./teamitem.module.scss";
import type { PropdTeamItem } from "../../types";
import type React from "react";

const TeamItem:React.FC<PropdTeamItem> = ({id, image, alt, name, position}) => {
	return (
    <div key={id} className={style.item}>
      <div className={style.inneritem}>
        <img src={image} alt={alt} />
        <img
          src="/images/about/team-bg.png"
          alt="bg rectangle"
          className={style.bg}
        />
      </div>
      <div className={style.legend}>
        <span className={style.name}>{name}</span>
        <span className={style.position}>{position}</span>
      </div>
    </div>
  );
}

export default TeamItem;