import style from "./aboutus.module.scss";
import ImagesBlock from "../ImagesBlock/ImagesBlock";

const AboutUs = () => {
	return (
    <section className={style.aboutus}>
      <div className={style.items}>
        <div className={style.content}>
          <h3 className={style.subtitle}>ABOUT US</h3>
          <h2 className={style.title}>
            Bringing Your Vision to Life: Learn About VRNas
          </h2>
          <div className={style.text}>
            <p>
              VRNas is a leading provider of VR services for education,
              entertainment, architecture, and events. Our mission is to bring
              the power of virtual reality to everyone, allowing them to explore
              new worlds, learn in new ways, and experience events in a whole
              new light.
            </p>
            <p>
              Our team consists of experienced VR developers, designers, and
              technicians who are passionate about VR and dedicated to
              delivering the highest quality work. We use the latest VR hardware
              and software to create immersive, interactive experiences that are
              tailored to your specific needs.
            </p>
            <p>
              From initial consultation to final delivery, we are committed to
              providing exceptional customer service. Our goal is to ensure that
              you are completely satisfied with every aspect of your VR
              experience.
            </p>
          </div>
        </div>
        <ImagesBlock
          mainimage="/images/about/hero-mainimage.png"
          mainimagealt="guy in VR glasses"
          video="/images/home/hero-video.png"
          videoalt="girl in VR glasses"
          light="/images/about/hero-light.png"
          bg="/images/home/about-main-bg.png"
        />
      </div>
    </section>
  );
}

export default AboutUs;