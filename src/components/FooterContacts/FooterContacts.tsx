import style from "./footercontacts.module.scss";

const FooterContacts = () => {
	return (
    <div className={style.contacts}>
      <h4 className={style.title}>Need Help?</h4>
      <div className={style.contact}>
        <img src="./images/home/footer-icon-location.svg" alt="location" />
        <address>Tanjung Sari Street no.48, Pontianak City</address>
      </div>
      <div className={style.contact}>
        <img src="./images/home/footer-icon-message.svg" alt="email" />
        <span>Support@VRNas.com</span>
      </div>
      <div className={style.contact}>
        <img src="./images/home/footer-icon-phone.svg" alt="phone" />
        <span>+123 456 7890</span>
      </div>
    </div>
  );
}
 
export default FooterContacts;