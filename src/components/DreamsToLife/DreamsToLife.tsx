import style from "./dreamstolife.module.scss";
import ButtonColor from "../ButtonColor/ButtonColor";
import { useRef, useState } from "react";

const DreamsToLife = () => {
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      setShowButton(false);
      videoRef.current.play();
    }
  };

  return (
    <section className={style.dreams}>
      <div className="container">
        <h3 className={style.subtitle}>HOW TO GET STARTED</h3>
        <h2 className={style.title}>
          Bringing Your Virtual Reality Dreams to Life
        </h2>
        <div className={style.videoblock}>
          <video
            src="/video/dreams.mov"
            controls
            poster="/images/home/dreams-video.png"
            ref={videoRef}
            className={style.video}
          ></video>
          <span className={style.beige}>VR Service</span>
          <h3 className={style.videotitle}>How to get started</h3>
          <img
            src="/images/home/dreams-play-button.png"
            className={style.play}
            onClick={handleVideoPlay}
            style={{display: showButton ? "block" : "none"}}
            alt="play button"
          />
          <img
            src="/images/home/started-light.png"
            className={style.videolight}
            alt="multicolored abstraction "
          />
        </div>
        <div className={style.button}>
          <ButtonColor textButton="GET STARTED" />
        </div>
      </div>
    </section>
  );
};

export default DreamsToLife;
