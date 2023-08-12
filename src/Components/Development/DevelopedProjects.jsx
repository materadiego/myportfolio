import vernal from "../../Assets/Images/favicon-vernal.png";
import tuEspacio from "../../Assets/Images/favicon-te.png";
import daleplast from "../../Assets/Images/favicon-daleplast.png";
import developmenticon from "../../Assets/Images/development-icon2.png";
import myTask from "../../Assets/Images/favicon-mytask.png";
import cocinas from "../../Assets/Images/favicon-co.png";

export default function DevelopedProjects() {
  return (
    <div className="DevelopmentBoxContainer">
      {/* PROJECT */}
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image MyTaskImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              src={myTask}
              alt="Daleplast"
              className="DaleplastFavicon DevelopmentBoxContainer--Favicon"
            ></img>
          </span>{" "}
          MyTask App
        </p>
        <p className="DevelopmentBoxContainer-Description">
          App focused on recording pending tasks & setting priorities. Deveolped
          using ReactJS.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/curso-react-intro/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>

      {/* PROJECT */}
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
      {/* PROJECT */}
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image AuraImage"></div>
        <p className="DevelopmentBoxContainer-Title">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              className="DevelopmentBoxContainer--Favicon"
              src={developmenticon}
              alt="Cocinas-Ocultas"
            ></img>
          </span>{" "}
          Aura Films
        </p>
        <p className="DevelopmentBoxContainer-Description">
          Personal project developed in API-Rest course. Movie search App
          developed using Axios, aplying loading skeletons & infinite scrolling
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://materadiego.github.io/aura-films/"
          className="Button Project-Button"
        >
          project
        </a>
      </div>
      {/* PROJECT */}
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
      {/* PROJECT */}
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
      {/* PROJECT */}
      <div className="DevelopmentBoxContainer-Box">
        <div className="DevelopmentBoxContainer-Button">
          <div className="DevelopmentBoxContainer-ButtonLine1"></div>
          <div className="DevelopmentBoxContainer-ButtonLine2"></div>
        </div>
        <div className="DevelopmentBoxContainer-Image CocinasImage"></div>
        <p className="DevelopmentBoxContainer-Title ">
          <span className="DevelopmentBoxContainer--FaviconContainer">
            {" "}
            <img
              src={cocinas}
              alt="Daleplast"
              className="DaleplastFavicon DevelopmentBoxContainer--Favicon"
            ></img>
          </span>{" "}
          Cocinas Ocultas
        </p>
        <p className="DevelopmentBoxContainer-Description">
          A venture located in Uruguay dedicated to the gastronomic industry.
          Developed using HTML, CSS & Javascript.
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
