import { useEffect, useRef, useState } from "react";
import style from "./getintouchform.module.scss";
import { itemsDownUP } from "../../../helpers";
import { gsap } from "gsap/gsap-core";
import useResponsiveEvent from "../../../useResponsiveEvent";

const GetInTouchForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const contentRef = useRef(null);

   const isDesktop = useResponsiveEvent(1024);

   const manageAnimations = (shouldAnimate: boolean) => {
     gsap.killTweensOf([contentRef.current]);
     if (shouldAnimate) {
        itemsDownUP(contentRef.current);
     }
   };

   useEffect(() => {
     manageAnimations(isDesktop);
   }, [isDesktop]);

  return (
    <div className={style.getintouchform} ref={contentRef}>
      <h3 className={style.subtitle}>CONTACT US</h3>
      <h2 className={style.title}>Get in Touch</h2>
      <p className={style.text}>
        At VRNas, we're always happy to hear from our clients and potential
        clients. Whether you have a question about our VR services, want to
        discuss a potential project, or just want to say hello, we're here to
        help.
      </p>
      <form action="#" className={style.form}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={style.input}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={style.input}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={style.input}
          placeholder="Email"
          required
        />
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={style.input}
          placeholder="Phone Number"
        />
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={style.message}
          placeholder="Message"
        ></textarea>
        <button type="submit" className={style.button}>
          send message
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
