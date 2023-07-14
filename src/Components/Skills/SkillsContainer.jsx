import icon from "../../Assets/Images/skills-icon.png";
import html from "../../Assets/Images/html.png";
import css from "../../Assets/Images/css.png";
import sass from "../../Assets/Images/sass.png";
import rDesign from "../../Assets/Images/responsive.png";
import js from "../../Assets/Images/js.png";
import ghub from "../../Assets/Images/github.png";
import react from "../../Assets/Images/react.png";
import ps from "../../Assets/Images/ps.png";
import webpack from "../../Assets/Images/webpack.png";

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
              <img className="SkillBox-Image HTML" src={html} alt="HTML"></img>
            </div>
            <p className="SkillBox-Title Text">HTML</p>
          </div>
        </div>
        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img className="SkillBox-Image Css" src={css} alt="CSS"></img>
            </div>
            <p className="SkillBox-Title Text ">CSS</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img className="SkillBox-Image Sass" src={sass} alt="Sass"></img>
            </div>
            <p className="SkillBox-Title Text">Sass</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img
                className="SkillBox-Image Rd"
                src={rDesign}
                alt="Responsive"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Responsive</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img
                className="SkillBox-Image Js"
                src={js}
                alt="Javascript"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Javascript</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img
                className="SkillBox-Image React"
                src={react}
                alt="ReactJS"
              ></img>
            </div>
            <p className="SkillBox-Title Text">ReactJS</p>
          </div>
        </div>
        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img
                className="SkillBox-Image Webpack"
                src={webpack}
                alt="Webpack"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Webpack</p>
          </div>
        </div>
        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer ">
              <img className="SkillBox-Image Gh" src={ghub} alt="GitHub"></img>
            </div>
            <p className="SkillBox-Title Text">GitHub</p>
          </div>
        </div>

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img className="SkillBox-Image Ps" src={ps} alt="Photoshop"></img>
            </div>
            <p className="SkillBox-Title Text">Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
