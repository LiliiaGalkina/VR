import { useState } from "react";
import style from "./whychooseus.module.scss";

const WhyChooseUs = () => {
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);

  return (
    <div className={style.whychoose}>
      <div className="container">
        <div className={style.items}>
          <div className={style.content}>
            <h3 className={style.subtitle}>WHY CHOOSE US</h3>
            <h2 className={style.title}>Why Choose Us for Your VR Needs</h2>
            <div className={style.block}>
              <div className={style.blockitem}>
                <div>
                  <h4 className={style.blockitemtitle}>
                    Passionate and Experienced Team
                  </h4>
                  <img
                    src="/images/home/choose-arrow.svg"
                    onClick={() => setBlock1(!block1)}
                    style={{
                      transform: block1 ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    alt="arrow down"
                  />
                </div>
                <p
                  className={style.text}
                  style={{ display: block1 ? "block" : "none" }}
                >
                  We are proud of our team of VR experts who are passionate
                  about VR and dedicated to delivering the highest quality work.
                  Our team consists of experienced VR developers, designers, and
                  technicians who have a proven track record of creating
                  immersive and engaging VR experiences.
                </p>
              </div>
              <div className={style.blockitem}>
                <div>
                  <h4 className={style.blockitemtitle}>Customized Solutions</h4>
                  <img
                    src="/images/home/choose-arrow.svg"
                    onClick={() => setBlock2(!block2)}
                    style={{
                      transform: block2 ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    alt="arrow down"
                  />
                </div>
                <p
                  className={style.text}
                  style={{ display: block2 ? "block" : "none" }}
                >
                  We are proud of our team of VR experts who are passionate
                  about VR and dedicated to delivering the highest quality work.
                  Our team consists of experienced VR developers, designers, and
                  technicians who have a proven track record of creating
                  immersive and engaging VR experiences.
                </p>
              </div>
              <div className={style.blockitem}>
                <div>
                  <h4 className={style.blockitemtitle}>
                    Exceptional Customer Service
                  </h4>
                  <img
                    src="/images/home/choose-arrow.svg"
                    onClick={() => setBlock3(!block3)}
                    style={{
                      transform: block3 ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    alt="arrow down"
                  />
                </div>
                <p
                  className={style.text}
                  style={{ display: block3 ? "block" : "none" }}
                >
                  We are proud of our team of VR experts who are passionate
                  about VR and dedicated to delivering the highest quality work.
                  Our team consists of experienced VR developers, designers, and
                  technicians who have a proven track record of creating
                  immersive and engaging VR experiences.
                </p>
              </div>
            </div>
          </div>
          <div className={style.images}>
            <div className={style.image}>
              <img
                src="/images/home/choose-main.png"
                alt="a guy wearing virtual reality glasses with his hand next to chest"
              />
            </div>
            <img
              src="/images/home/choose-bg.png"
              className={style.bg}
              alt="purple rectangle"
            />
            <img
              src="/images/home/choose-light.png"
              className={style.light}
              alt="multicolored abstraction"
            />
            <img
              src="/images/home/choose-video.png"
              className={style.video}
              alt="virtual reality glasses"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
