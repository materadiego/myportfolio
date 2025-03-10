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
import next from "../../Assets/Images/next.png";
import premiere from "../../Assets/Images/premiere.png";
import nest from "../../Assets/Images/nest.png";
import firebase from "../../Assets/Images/firebase.png";
import anime from "../../Assets/Images/anime.png";

export default function SkillsContainer({ langEn }) {
  return (
    <div className="SkillsContentWrapper SectionContainer">
      <p className="SkillsTitle Title SectionTitle">
        <img src={icon} alt="Skills"></img>
        {langEn ? "My Skills" : "Aptitudes"}
      </p>
      <div className="SkillsBoxContainer">
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
                className="SkillBox-Image Ps"
                src={next}
                alt="Photoshop"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Nextjs</p>
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
                className="SkillBox-Image Webpack"
                src={anime}
                alt="animejs"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Anime.js</p>
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
                className="SkillBox-Image Ps"
                src={nest}
                alt="Photoshop"
              ></img>
            </div>
            <p className="SkillBox-Title Text">NestJs</p>
          </div>
        </div>
        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img
                className="SkillBox-Image Ps"
                src={firebase}
                alt="Photoshop"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Firebase</p>
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

        {/* Box */}
        <div className="SkillBoxWrapper">
          <div className="SkillBox">
            <div className="SkillBox-ImageContainer">
              <img
                className="SkillBox-Image Ps"
                src={premiere}
                alt="Photoshop"
              ></img>
            </div>
            <p className="SkillBox-Title Text">Premiere</p>
          </div>
        </div>
      </div>
    </div>
  );
}
