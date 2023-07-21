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
          Tu espacio
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos
          facere eaque eos, iure iste accusantium! Quasi explicabo quibusdam
          possimus autem maiores perferendis fuga ipsa aut, voluptatum nostrum
          id fugit?
        </p>
        <div className="Button Project-Button">project</div>
      </div>
    </div>
  );
}
