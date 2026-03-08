import style from "./teamitem.module.scss";
import type { PropsTeamItem } from "../../types";
import type React from "react";

const TeamItem: React.FC<PropsTeamItem> = ({
  image,
  alt,
  name,
  position,
}) => {
  return (
    <div className={style.item}>
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
      <div className={style.social}>
        <div className={style.outitem}>
          <a href="#" className={style.socialitem}>
            <img src="/images/home/footer-instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className={style.outitem}>
          <a href="#" className={style.socialitem}>
            <img src="/images/home/footer-fb.svg" alt="facebook" />
          </a>
        </div>
        <div className={style.outitem}>
          <a href="#" className={style.socialitem}>
            <img src="/images/home/footer-twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
