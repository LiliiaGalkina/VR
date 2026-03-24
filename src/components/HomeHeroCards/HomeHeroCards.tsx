import style from "./homeherocards.module.scss";
import { heroItems } from "../../data";
import { useEffect, useRef } from "react";
import { downToUp } from "../../helpers";
import { gsap } from "gsap/gsap-core";
import useResponsiveEvent from "../../useResponsiveEvent";

const HomeHeroCards = () => {
	const blockRef = useRef(null);

     const isDesktop = useResponsiveEvent(1024);

        const manageAnimations = (shouldAnimate: boolean) => {
          gsap.killTweensOf([blockRef.current]);
          if (shouldAnimate) {
           downToUp(blockRef.current);
          }
        };
     
        useEffect(() => {
          manageAnimations(isDesktop);
        }, [isDesktop]);
     

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