import icon from "../../Assets/Images/skills-icon.png";
import html from "../../Assets/Images/html.png";
import css from "../../Assets/Images/css.png";
import sass from "../../Assets/Images/sass.png";
import rDesign from "../../Assets/Images/responsive.png";
import js from "../../Assets/Images/js.png";
import ghub from "../../Assets/Images/github.png";
import react from "../../Assets/Images/react.png";

export default function SkillsContainer() {
  return (
    <div className="SkillsContentWrapper SectionContainer">
      <p className="SkillsTitle Title SectionTitle">
        <img src={icon} alt="Skills"></img>My Skills
      </p>
      <div className="SkillsBoxContainer">
        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={html} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">HTML</p>
          </div>
        </div>
        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={css} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">CSS</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={sass} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">Sass</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={rDesign} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">Responsive</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={js} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">Javascript</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={react} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">ReactJS</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img src={ghub} alt="ReactJS"></img>
            </div>
            <p className="SkillBox-Title Text">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
