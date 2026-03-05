import style from "./getintouchimages.module.scss";

const GetInTouchImages = () => {
    return (
      <div className={style.circle1}>
        <a href="#" target="_blank" className={style.item}>
          <div className={style.inneritem}>
            <img
              src="/images/contactus/twitter.svg"
              alt="twitter"
              className={style.twitter}
            />
          </div>
        </a>
        <a href="#" target="_blank" className={style.item}>
          <div className={style.inneritem}>
            <img
              src="/images/contactus/twitter.svg"
              alt="twitter"
              className={style.twitter}
            />
          </div>
        </a>
        <a href="#" target="_blank" className={style.item}>
          <div className={style.inneritem}>
            <img
              src="/images/contactus/twitter.svg"
              alt="twitter"
              className={style.twitter}
            />
          </div>
        </a>
        <div className={style.circle2}>
          <div className={style.inneritem}>
            <img
              src="/images/contactus/github.svg"
              alt="github"
              className={style.github}
            />
          </div>
          <div className={style.circle3}>
            <div className={style.mainimage}>
              <img
                src="/images/contactus/main-down.png"
                alt="a guy in VR glasses"
                className={style.mainimgdown}
              />
              <img
                src="/images/contactus/main-up.png"
                alt="a guy in VR glasses"
                className={style.mainimgup}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default GetInTouchImages;