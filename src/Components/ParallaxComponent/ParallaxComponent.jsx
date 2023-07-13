import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Man from "../../Assets/Images/man.png";
import Mountains from "../../Assets/Images/mountains.png";
import "./ParallaxComponent.scss";
import { useState } from "react";

export default function ParallaxComponent() {
  const [modeMood, setModeMood] = useState("Light Mode");
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
    if (modeMood === "Dark Mode") {
      setModeMood("Light Mode");
    } else if (modeMood === "Light Mode") {
      setModeMood("Dark Mode");
    }
  };

  return (
    <section className="ParallaxComponent">
      <div
        className={`ParallaxContainer ${mode ? "BgLightMode" : "BgDarkMode"}`}
      >
        <div
          className={`ParallaxContainer__Overlay ${
            mode ? "OverlayOff" : "OverlayOn"
          }`}
        ></div>
        <img
          id="Man"
          src={Man}
          alt="man"
          className="ParallaxContainer__Man"
        ></img>
        <img
          id="Mountain"
          src={Mountains}
          alt="man"
          className="ParallaxContainer__Mountains"
        ></img>
        <div className="ParallaxButton Hover">Hover</div>
        <div className="ParallaxButton Mode" onClick={toggleMode}>
          {modeMood}
        </div>
      </div>
    </section>
  );
}
