import style from "./homeherocards.module.scss";
import { heroItems } from "../../data";
import { useLayoutEffect, useRef } from "react";
import { downToUp } from "../../helpers";
import { gsap } from "gsap/gsap-core";

const HomeHeroCards = () => {
	const blockRef = useRef(null);

	useLayoutEffect(() => {
		downToUp(blockRef.current);
		  return () => {
        gsap.killTweensOf(blockRef.current);
      };
	}, [])

    return (
        <div className={style.cards} ref={blockRef}>
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