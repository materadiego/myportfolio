import { useState } from "react";
import ProfileImg from "../../Assets/Images/avatar2.png";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header
      className={`NavBar ${menu ? "NavBar__Active" : "NavBar__Inactive"}`}
    >
      <div
        className={`MenuButton  ${
          menu ? "MenuButton__Active" : "MenuButton__Inactive"
        }`}
        onClick={toggleMenu}
      >
        <div className="MenuButtonContainer">
          <span
            className={`MenuButton-Span ${
              menu ? "MenuButton-Span__Active--1" : "MenuButton-Span__Inactive"
            }  `}
          ></span>
          <span
            className={`MenuButton-Span ${
              menu ? "MenuButton-Span__Active--2" : "MenuButton-Span__Inactive"
            }  `}
          ></span>
        </div>
        <div className="MenuButtonContainer">
          <span
            className={`MenuButton-Span ${
              menu ? "MenuButton-Span__Active--3" : "MenuButton-Span__Inactive"
            }  `}
          ></span>
          <span
            className={`MenuButton-Span ${
              menu ? "MenuButton-Span__Active--4" : "MenuButton-Span__Inactive"
            }  `}
          ></span>
        </div>
      </div>
      <div
        className={`NavBarContainer ${
          menu ? "NavBarContainer__Active" : "NavBarContainer__Inactive"
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
          <h2 className="Subtitle NavBarSubtitle">frontend developer</h2>
          <h3 className="Text NavBarText">buenos aires, arg</h3>
        </article>
        <nav className="Menu">
          <ul className="MenuList">
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>
              <a href="#AboutMe">About me</a>
            </li>
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>

              <a href="#Skills">My Skills</a>
            </li>
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>

              <a href="#Development">Projects</a>
            </li>
            <li onClick={toggleMenu} className="MenuList-Links">
              <div className="MenuList-Links-Shadow"></div>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
