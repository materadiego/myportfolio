import vernal from "../../Assets/Images/favicon-vernal.png";
import tuEspacio from "../../Assets/Images/favicon-te.png";
import daleplast from "../../Assets/Images/favicon-daleplast.png";
import cocinas from "../../Assets/Images/favicon-co.png";

export default function DevelopedProjects() {
  return (
    <div className="DevelopmentBoxContainer">
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image VernalImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={vernal}
              alt="Vernal"
            ></img>
          </span>
          Vernal Studio
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Graphic design, marketing, UX/UI agency. Single-page application built
          using ReactJS & Sass.
        </p>
        <a
          href="https://materadiego.github.io/vernal-studio/#/home"
          target="_blank"
          rel="noreferrer"
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
        <div className="DevelopmentBoxContainer-Image TuEspacioImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={tuEspacio}
              alt="Tu-Espacio"
            ></img>
          </span>{" "}
          Tu Espacio
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Interior design company. Single-page application built using ReactJS &
          Sass.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/tu-espacio-react/"
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
        <div className="DevelopmentBoxContainer-Image DaleplastImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              src={daleplast}
              alt="Daleplast"
              className="DaleplastFavicon DevelopmentBoxContainer--Favicon"
            ></img>
          </span>{" "}
          Daleplast
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Plastic products manufacturer in Tierra del Fuego, Argentina.
          Single-page application built using ReactJS & Sass
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.daleplast.com.ar/"
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
        <div className="DevelopmentBoxContainer-Image CocinasImage"></div>
        <p className="DevelopmentBoxContainer-Title">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={cocinas}
              alt="Cocinas-Ocultas"
            ></img>
          </span>{" "}
          Cocinas Ocultas
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Entrepreneurship in Uruguay. Developed using HTML5, CSS3 & Javascript.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/cocinas-ocultas/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
    </div>
  );
}
