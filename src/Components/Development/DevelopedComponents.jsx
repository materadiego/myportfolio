import developmentBoxIcon from "../../Assets/Images/development-icon2.png";

export default function DevelopedComponents({ langEn }) {
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
          {langEn
            ? "Interactive component developed using HTML5 & CSS3."
            : "Componente interactivo desarrollado con HTML5 & CSS3."}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/login1/"
          className="Button Project-Button  Button__big Button__blue"
        >
          {langEn ? "project" : "proyecto"}
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
          {langEn
            ? "Course landing page model, developed in css-grid course."
            : "Modelo de landing page de curso, desarrollado en curso de css-grid."}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/layout-curso/"
          className="Button Project-Button  Button__big Button__blue"
        >
          {langEn ? "project" : "proyecto"}
        </a>
      </div>{" "}
    </div>
  );
}
