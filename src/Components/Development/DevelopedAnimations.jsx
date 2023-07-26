import developmentBoxIcon from "../../Assets/Images/development-icon2.png";

export default function DevelopedAnimations() {
  return (
    <div className="DevelopmentBoxContainer">
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image TransitionsImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          Tridimensional Parallax
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos
          facere eaque eos, iure iste accusantium! Quasi explicabo quibusdam
          possimus autem maiores perferendis fuga ipsa aut, voluptatum nostrum
          id fugit?
        </p>
        <div className="Button Project-Button">project</div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos
          facere eaque eos, iure iste accusantium! Quasi explicabo quibusdam
          possimus autem maiores perferendis fuga ipsa aut, voluptatum nostrum
          id fugit?
        </p>
        <a
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos
          facere eaque eos, iure iste accusantium! Quasi explicabo quibusdam
          possimus autem maiores perferendis fuga ipsa aut, voluptatum nostrum
          id fugit?
        </p>
        <a
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
          Background Animation
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos
          facere eaque eos, iure iste accusantium! Quasi explicabo quibusdam
          possimus autem maiores perferendis fuga ipsa aut, voluptatum nostrum
          id fugit?
        </p>
        <a
          href="https://materadiego.github.io/prueba-animacion-css/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
    </div>
  );
}
