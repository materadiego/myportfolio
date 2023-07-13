import { Parallax } from "react-parallax";
import Overlay from "../../Assets/Images/overlay.png";
import Overlay2 from "../../Assets/Images/overlay2.png";

import SkillsBg from "../../Assets/Images/skills-bg5.jpg";
import SkillsContainer from "./SkillsContainer";

export default function Skills() {
  return (
    <div className="Skills" id="Skills">
      <div className="Skills-Parallax-Container">
        <div className="SkillImage-Parallax-Container">
          <Parallax strength={-200} bgImage={SkillsBg}>
            <div className="SkillsParallaxContent"></div>
          </Parallax>
        </div>
        <div className="SkillOverlay-Parallax-Container">
          <Parallax strength={-800} bgImage={Overlay}>
            <div className="SkillsParallaxContent-Overlay"></div>
          </Parallax>
        </div>
        <div className="SkillOverlay-Parallax-Container">
          <Parallax strength={-200} bgImage={Overlay2}>
            <div className="SkillsContentContainer">
              <SkillsContainer />
            </div>
          </Parallax>
        </div>
      </div>
      <div className="SkillsParallaxContent"></div>
    </div>
  );
}
