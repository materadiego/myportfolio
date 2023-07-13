import { Parallax } from "react-parallax";
import HeroBg from "../../Assets/Images/hero-bg3.jpg";
import HeroMountain from "../../Assets/Images/hero-mountain.png";
import Overlay from "../../Assets/Images/overlay.png";
import Overlay2 from "../../Assets/Images/overlay2.png";
export default function Hero() {
  return (
    <div className="Hero">
      <div className="Background-Parallax-Container">
        <Parallax strength={200} bgImage={HeroBg}>
          <div className="HeroParallaxContent"></div>
        </Parallax>
      </div>
      <div className="Mountain-Parallax-Container">
        <Parallax strength={-300} bgImage={HeroMountain}>
          <div className="HeroParallaxContent-Mountain"></div>
        </Parallax>
      </div>
      <div className="Overlay-Parallax-Container">
        <Parallax strength={500} bgImage={Overlay}>
          <div className="HeroParallaxContent-Overlay"></div>
        </Parallax>
      </div>
      <div className="Overlay-Parallax-Container">
        <Parallax strength={-800} bgImage={Overlay2}>
          <div className="HeroParallaxContent-Overlay">
            <p className="HeroParallaxContent-Title Title">
              ¡Welcome to my portfolio!
            </p>
            <p className="HeroParallaxContent-Text Text">
              My name is Diego Matera, I am a frontend developer. ¡Lets move on
              into this journey!
            </p>
            <a href="#AboutMe" className="Button HeroButton">
              Start
            </a>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
