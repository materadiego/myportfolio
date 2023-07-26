import developmentBoxIcon from "../../Assets/Images/development-icon2.png";

export default function DevelopedComponents() {
  return (
    <div className="DevelopmentBoxContainer">
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image LoginComponentImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          Login Component
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Interactive component developed using HTML5 & CSS3.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/login1/"
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
        <div className="DevelopmentBoxContainer-Image LandingPageImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmentBoxIcon}
              alt="Vernal"
            ></img>
          </span>
          Landing Page
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Course landing page model, developed in css-grid course.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/layout-curso/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>{" "}
    </div>
  );
}
