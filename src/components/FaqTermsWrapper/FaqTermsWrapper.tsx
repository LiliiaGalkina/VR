import style from "./faqtermswrapper.module.scss";
import Subscribe from "../Subscribe/Subscribe";
import type { JSX } from "react";

type PropsElement = {children: JSX.Element}

const FaqTermsWrapper = ({ children }:PropsElement)=> {
	return (
		<div className={style.wrapper}>
          <div className="container">
          {children}
            <Subscribe/>
          </div>
          <img
            src="/images/faq/decor.png"
            alt="a guy in VR glasses"
            className={style.leftdecor}
          />
          <img
            src="/images/faq/decor.png"
            alt="a guy in VR glasses"
            className={style.rightdecor}
          />
        </div>
	)
}

export default FaqTermsWrapper;