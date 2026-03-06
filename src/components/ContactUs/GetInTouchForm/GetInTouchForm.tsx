import style from "./getintouchform.module.scss";

const GetInTouchForm = () => {
    return (
      <div className={style.getintouchform}>
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
            className={style.input}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            className={style.input}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            className={style.input}
            placeholder="Email"
            required
          />
          <input
            type="phone"
            className={style.input}
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            id="message"
            className={style.message}
            placeholder="Message"
          ></textarea>
          <button type="submit" className={style.button}>send message</button>
        </form>
      </div>
    );
}

export default GetInTouchForm;