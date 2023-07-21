import { useState } from "react";
import icon from "../../Assets/Images/development-icon.png";
import DevelopedProjects from "./DevelopedProjects";
import DevelopedAnimations from "./DevelopedAnimations";
import DevelopedComponents from "./DevelopedComponents";

export default function Development() {
  const [selected, setSelected] = useState(<DevelopedProjects />);
  const [developments, setDevelopments] = useState(true);
  const [animations, setAnimations] = useState(false);
  const [components, setComponents] = useState(false);

  function selectComponent(param) {
    switch (param) {
      case "developments":
        setDevelopments(true);
        setAnimations(false);
        setComponents(false);

        return setSelected(<DevelopedProjects />);
      case "animations":
        setDevelopments(false);
        setAnimations(true);
        setComponents(false);
        return setSelected(<DevelopedAnimations />);
      case "components":
        setDevelopments(false);
        setAnimations(false);
        setComponents(true);
        return setSelected(<DevelopedComponents />);
      default:
        setDevelopments(true);
        setAnimations(false);
        setComponents(false);
        return setSelected(<DevelopedProjects />);
    }
  }
  return (
    <div className="Development" id="Development">
      <div className="DevelopmentContainer SectionContainer">
        <p className="Deveolpment-Title Title SectionTitle">
          <img src={icon} alt="Development"></img>Projects
        </p>
        <div className="SelectorContainer">
          <p
            onClick={() => selectComponent("developments")}
            className={`SelectorContainer-Options Subtitle ${
              developments
                ? "DevelopmentSelectorActive"
                : "DevelopmentSelectorInactive"
            }`}
          >
            Developments
          </p>
          <p
            onClick={() => selectComponent("animations")}
            className={`SelectorContainer-Options Subtitle ${
              animations
                ? "DevelopmentSelectorActive"
                : "DevelopmentSelectorInactive"
            }`}
          >
            Animations
          </p>
          <p
            onClick={() => selectComponent("components")}
            className={`SelectorContainer-Options Subtitle ${
              components
                ? "DevelopmentSelectorActive"
                : "DevelopmentSelectorInactive"
            }`}
          >
            Components
          </p>
        </div>
        {selected}
      </div>
    </div>
  );
}
