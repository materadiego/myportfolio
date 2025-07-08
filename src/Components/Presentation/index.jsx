import { LayoutContainer } from "../LayoutContainer";
import { Button } from "../Button";
import { HeroTextEn, HeroTextEs } from "../../utils/PresentationTexts";
import { FaPlus } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import profileImage from "../../Assets/Images/avatar3.webp";

const Presentation = ({ english, setView, toggleLanguage }) => {
  const texts = english ? HeroTextEn : HeroTextEs;
  return (
    <div className="Hero">
      <LayoutContainer>
        <div className="content">
          <h1 className="title">{texts.title}</h1>
          <p className="presentationDescription">{texts.description1}</p>
          <p className="presentationDescription">{texts.description2}</p>
          <div className="moreButtonContainer">
            <Button
              margin="4lvw 0 0"
              color={"transparentPink"}
              font={"big"}
              action={() => setView("content")}
            >
              <FaPlus className={`buttonIcon buttonIcon__more`} />{" "}
              {texts.button1}
            </Button>
          </div>
          <div className="presentationLanguageButtonContainer">
            <Button
              margin="0"
              color={"transparentWhite"}
              font={"xsmall"}
              action={() => toggleLanguage()}
            >
              {english ? "Español" : "English"}
            </Button>
          </div>
        </div>
      </LayoutContainer>
      <div className="heroBgContainer">
        <div className="heroBg">
          <div className="heroBgOverlay"></div>
          <img src={profileImage} alt="Hero Background" className="heroImage" />
          <div className="profileContainer">
            <h2 className="profileContainerTitle">Diego Matera</h2>
            <p className="profileContainerText">
              Frontend Developer | Process Automation{" "}
            </p>
            <p className="profileContainerText">
              Prompt Engineering | Photo & Video Editor
            </p>
            <div className="linkedinButtonContainer">
              <Button
                color={"transparentWhite"}
                font={"small"}
                action={() => setView("content")}
              >
                <SiLinkedin className={`buttonIcon buttonIcon__linkedin`} />{" "}
                {texts.button2}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Presentation };
