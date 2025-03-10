import { useState } from "react";
import ProfileImg from "../../Assets/Images/avatar2.png";

export default function NavBar({ langEn, setLangEn, menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`NavBar ${menuOpen ? "NavBar__Active" : "NavBar__Inactive"}`}
    >
      <div
        className={`MenuButton  ${
          menuOpen ? "MenuButton__Active" : "MenuButton__Inactive"
        }`}
        onClick={toggleMenu}
      >
        <div className="MenuButtonContainer">
          <span
            className={`MenuButton-Span ${
              menuOpen
                ? "MenuButton-Span__Active--1"
                : "MenuButton-Span__Inactive"
            }  `}
          ></span>
          <span
            className={`MenuButton-Span ${
              menuOpen
                ? "MenuButton-Span__Active--2"
                : "MenuButton-Span__Inactive"
            }  `}
          ></span>
        </div>
        <div className="MenuButtonContainer">
          <span
            className={`MenuButton-Span ${
              menuOpen
                ? "MenuButton-Span__Active--3"
                : "MenuButton-Span__Inactive"
            }  `}
          ></span>
          <span
            className={`MenuButton-Span ${
              menuOpen
                ? "MenuButton-Span__Active--4"
                : "MenuButton-Span__Inactive"
            }  `}
          ></span>
        </div>
      </div>
      <div
        className={`NavBarContainer ${
          menuOpen ? "NavBarContainer__Active" : "NavBarContainer__Inactive"
        }`}
      >
        <article className="ProfileCard">
          <div className="ProfileCard-ImageContainer">
            <div className="ProfileCard-ImageWrapper">
              <img
                src={ProfileImg}
                alt="Profile"
                className="ProfileCard-Image"
              ></img>
            </div>
          </div>
          <h1 className="Title NavBarTitle">diego matera</h1>
          <h2 className="Subtitle NavBarSubtitle">
            {langEn ? "frontend developer" : "desarrollador frontend"}
          </h2>
          <h3 className="Text NavBarText">buenos aires, arg</h3>
        </article>
        <nav className="Menu">
          <ul className="MenuList">
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>
              <a href="#AboutMe">{langEn ? "About me" : "Sobre mi"}</a>
            </li>
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>

              <a href="#Skills">{langEn ? "My Skills" : "Aptitudes"}</a>
            </li>
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>

              <a href="#Development">{langEn ? "Projects" : "Proyectos"}</a>
            </li>
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>
              <a href="#Contact">{langEn ? "Contact" : "Contacto"}</a>
            </li>
          </ul>
        </nav>
        <div className="languageSelector languageSelector__menu">
          <button
            className={`language-button Button  Button__small Button__transparent ${
              langEn ? "Button__active" : "Button__inactive"
            } `}
            onClick={() => setLangEn(true)}
          >
            english
          </button>
          <button
            className={` language-button Button Button__small Button__transparent ${
              !langEn ? "Button__active" : "Button__inactive"
            } `}
            onClick={() => setLangEn(false)}
          >
            español
          </button>
        </div>
      </div>
      <div className="languageSelector languageSelector__hero">
        <button
          className={`Button Button__small Button__transparent  `}
          onClick={() => setLangEn(!langEn)}
        >
          {langEn ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
