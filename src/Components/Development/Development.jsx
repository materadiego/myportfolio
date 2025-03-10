import { useState } from "react";
import icon from "../../Assets/Images/development-icon.png";
import DevelopedProjects from "./DevelopedProjects";
import DevelopedAnimations from "./DevelopedAnimations";
import DevelopedComponents from "./DevelopedComponents";

export default function Development({ langEn }) {
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

        return setSelected(<DevelopedProjects langEn={langEn} />);
      case "animations":
        setDevelopments(false);
        setAnimations(true);
        setComponents(false);
        return setSelected(<DevelopedAnimations langEn={langEn} />);
      case "components":
        setDevelopments(false);
        setAnimations(false);
        setComponents(true);
        return setSelected(<DevelopedComponents langEn={langEn} />);
      default:
        setDevelopments(true);
        setAnimations(false);
        setComponents(false);
        return setSelected(<DevelopedProjects langEn={langEn} />);
    }
  }
  return (
    <div className="Development" id="Development">
      <div className="DevelopmentContainer SectionContainer">
        <p className="Deveolpment-Title Title SectionTitle">
          <img src={icon} alt="Development"></img>
          {langEn ? "Projects" : "Proyectos"}
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
            {langEn ? "Developments" : "Desarrollos"}
          </p>
          <p
            onClick={() => selectComponent("animations")}
            className={`SelectorContainer-Options Subtitle ${
              animations
                ? "DevelopmentSelectorActive"
                : "DevelopmentSelectorInactive"
            }`}
          >
            {langEn ? "Animations" : "Animaciones"}
          </p>
          <p
            onClick={() => selectComponent("components")}
            className={`SelectorContainer-Options Subtitle ${
              components
                ? "DevelopmentSelectorActive"
                : "DevelopmentSelectorInactive"
            }`}
          >
            {langEn ? "Components" : "Componentes"}
          </p>
        </div>
        {selected}
      </div>
    </div>
  );
}
