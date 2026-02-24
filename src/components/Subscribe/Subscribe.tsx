import style from "./subscribe.module.scss";

const Subscribe = () => {
  return (
    <section className={style.subscribe}>
      <div className="container">
        <div className={style.items}>
          <h2 className={style.title}>
            Subscribe to our newsletter for latest updates
          </h2>
          <form action="#" className={style.form}>
            <input
						  type="email"
						  required
						  placeholder="Enter your email address"
						  className={style.email}
            />
            <button type="submit" className={style.button}>
              <img
                src="/images/home/subscriba-send-arrow.svg"
                alt="send-arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
