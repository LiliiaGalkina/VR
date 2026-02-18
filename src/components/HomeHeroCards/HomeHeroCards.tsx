import style from "./homeherocards.module.scss";
import { heroItems } from "../../data";

const HomeHeroCards = () => {
    return (
        <div className={style.cards}>
            {heroItems.map((heroItem) => (
                <div key={heroItem.id} className={style.card}>
                    <div className={style.image}>
                        <img src={heroItem.img} alt={heroItem.alt} />
                    </div>
                    <h4 className={style.title}>{heroItem.title}</h4>
                    <p className={style.text}>{heroItem.text}</p>
                </div>
            )
            )}
        </div>
    )
}

export default HomeHeroCards;