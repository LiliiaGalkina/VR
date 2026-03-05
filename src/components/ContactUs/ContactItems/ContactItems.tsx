import style from "./contactitems.module.scss";
import ContactsItem from "../ContactsItem/ContactsItem";
import { contacts } from "../../../data";

const ContactItems = () => {
    return (
        <div className={style.items}>
            {contacts.map((item) => (
                <ContactsItem key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default ContactItems;