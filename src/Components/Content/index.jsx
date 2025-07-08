import { useState } from "react";
import { LayoutContainer } from "../LayoutContainer";
import { Button } from "../Button";
import { Technologies } from "../../utils/Technologies";
import { ContentTextEn, ContentTextEs } from "../../utils/ContentTexts";
import { getSectionById } from "../../utils/Knowledge";
import { getCertificationsById } from "../../utils/Certifications";
import { getProjectsByProfileLabel } from "../../utils/Projects";
import { BiCheckCircle, BiLeftArrowAlt } from "react-icons/bi";
import bg from "../../Assets/Images/bg-png1.png";
const Content = ({ setView, english, toggleLanguage }) => {
  const texts = english ? ContentTextEn : ContentTextEs;

  // Render content
  const [renderContent, setRenderContent] = useState("frontend");
  const technologies = Technologies.filter((technology) =>
    technology.profileLabel.includes(renderContent)
  );
  const skills = getSectionById(renderContent, english);
  const certifications = getCertificationsById(renderContent, english);
  const projects = getProjectsByProfileLabel(renderContent, english);
  console.log("tech stack: ", technologies);
  console.log("skills: ", skills);
  console.log("certifications: ", certifications);
  return (
    <div className="Content">
      <div className="contentOverlay"></div>
      <div className="contentBg">
        <div className="contentBg__gradientContainer">
          <img src={bg} alt="bg" />
        </div>
      </div>
      <LayoutContainer>
        <div className="container">
          <div className="contentLanguageButtonContainer">
            <Button
              color={"transparentWhite"}
              font={"xsmall"}
              action={() => toggleLanguage()}
            >
              {english ? "Español" : "English"}
            </Button>
          </div>
          <Button
            color={"transparentWhite"}
            font={"xsmall"}
            action={() => setView("hero")}
          >
            <BiLeftArrowAlt className="buttonIcon" /> {texts.backbutton}
          </Button>
          <div className="contentMenu">
            {texts.labels.map((label) => (
              <p
                key={label.id}
                onClick={() => setRenderContent(label.id)}
                className={`contentMenuButton ${
                  renderContent === label.id
                    ? "contentMenuButton__active"
                    : "contentMenuButton__inactive"
                }`}
              >
                {label.name}
              </p>
            ))}
          </div>
          <div className="description">
            <h4 className="descriptionTitle">Main Skills</h4>

            <p className="descriptionText">{skills.description}</p>
            <h4 className="descriptionTitle">Main Technologies</h4>
            {technologies.map((technology) => (
              <p key={technology.id} className="descriptionText">
                {technology.name}
              </p>
            ))}
            <h4 className="descriptionTitle">Certifications</h4>
            <div className="certificationsContainer">
              {certifications.map((certification) => (
                <p
                  key={certification.name}
                  className={`descriptionText certificationText`}
                >
                  <BiCheckCircle className="checkIcon" /> {certification.name}
                </p>
              ))}
            </div>

            {projects.length > 0 && (
              <h4 className="descriptionTitle">Projects</h4>
            )}
            {projects.length > 0 && (
              <div className="projectsContainer">
                {projects.map((project) => (
                  <div key={project.name} className="projectBox">
                    <div className="projectImageContainer">
                      <img
                        src={require(`../../Assets/Images/${project.image}`)}
                        alt={project.name}
                        className="projectImage"
                      />
                    </div>
                    <p className="projectTitle">{project.name}</p>
                    <p className="projectDescription">{project.description}</p>
                    <div className="projectButtonContainer">
                      <Button
                        margin="0"
                        color={"transparentPink"}
                        font={"big"}
                        action={() => window.open(project.link, "_blank")}
                      >
                        Project View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export { Content };
