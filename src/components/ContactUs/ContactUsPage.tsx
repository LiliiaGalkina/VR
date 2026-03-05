import style from "./contactuspage.module.scss";
import TitleBlock from "../TitleBlock/TitleBlock";
import ContactItems from "./ContactItems/ContactItems";
import GetInTouch from "./GetInTouch/GetInTouch";

const ContactUsPage = () => {
    return (
        <main>
            <div className="container">
                <TitleBlock titletext="Contact Us"/>
                <ContactItems/>
                <GetInTouch/>
            </div>
        </main>
    )
}

export default ContactUsPage;