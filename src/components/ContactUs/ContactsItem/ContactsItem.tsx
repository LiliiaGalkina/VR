import style from "./contactsitem.module.scss";
import type { PropsContactsItems } from "../../../types";
import type React from "react";

const ContactsItem: React.FC<PropsContactsItems> = ({
  image,
  alt,
  title,
  text,
}) => {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <div className={style.inner}>
          <img src={image} alt={alt} />
        </div>
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default ContactsItem;
