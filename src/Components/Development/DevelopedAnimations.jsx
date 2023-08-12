import developmentBoxIcon from "../../Assets/Images/development-icon2.png";

export default function DevelopedAnimations() {
  return (
    <div className="DevelopmentBoxContainer">
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image ParallaxBgImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          Bg Parallax
        </p>
        <p className="DevelopmentBoxContainer-Description">
          "Moving Background". Animation developed using HTML5 & CSS3.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/parallax-animated-background/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image ParallaxImage "></div>
        <p className="DevelopmentBoxContainer-Title">
          {" "}
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          Parallax Animations
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Background image animation using react-parallax. Developed in ReactJS.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/parallax-animation-demo/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image AnimatedCube1Image"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          3D Animated Cube
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Animated color changing tridimensional cube, developed using HTML5 &
          CSS3.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/cube-animation2/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image KombiImage "></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          Bg Animation
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Animation developed using HTML5 & CSS3.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/prueba-animacion-css/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
    </div>
  );
}
