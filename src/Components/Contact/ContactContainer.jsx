import linkedin from "../../Assets/Images/socialmedia-in.png";
import instagram from "../../Assets/Images/socialmedia-ig.png";
import youtube from "../../Assets/Images/socialmedia-yt.png";
import Loader from "../../Assets/Images/loader.svg";
import { useState } from "react";

export default function ContactContainer({ langEn }) {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    Name: "",
    Mail: "",
    Message: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = async (event) => {
    event.preventDefault();
    setResponse(
      <img
        alt="loader"
        className="ContactResponseContainer__Loader"
        src={Loader}
      ></img>
    );
    const res = await fetch(
      "https://formsubmit.co/ajax/diegomatera@gmail.com",
      {
        method: "post",
        body: new FormData(event.target),
      }
    );
    const data = await res.json();
    console.log(data);

    console.log(res.status);

    if (res.status !== 200) {
      setResponse("Error. Please try again");
    } else {
      setResponse("Message sent successfully!");
      setDatos({
        Name: "",
        Mail: "",
        Message: "",
      });
    }
  };
  return (
    <div className="ContactSectionContainer">
      <div className="ContactContainer">
        <div className="ContactContainer-Subcontainer">
          <h4 className="ContactContainer-Title Title">
            {langEn ? "Contact" : "Contacto"}
          </h4>
          <p className="ContactContainer-Text Text">
            {langEn
              ? "For more information you can send me an email through the next form."
              : "Para más información puedes enviarme un email a través del siguiente formulario."}
          </p>
          <h4 className="ContactContainer-Title Title">
            {langEn ? "Social Media" : "Redes sociales"}{" "}
          </h4>
          <div className="ContactContainer-MediaContainer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/diego-matera/"
              className="SocialMediaLink"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className="SocialMediaImage Linkedin"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/filmtyphoon/"
              target="_blank"
              rel="noreferrer"
              className="SocialMediaLink"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="SocialMediaImage Instagram"
              ></img>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCPjkHs3GcQHjCivkiTLodVw"
              className="SocialMediaLink"
            >
              <img
                src={youtube}
                alt="YouTube"
                className="SocialMediaImage YouTube"
              ></img>
            </a>
          </div>
        </div>
        <form className="ContactForm" onSubmit={enviarDatos}>
          <label className="ContactForm-Label">
            {langEn ? "Name: " : "Nombre: "}
          </label>
          <input
            maxLength={2000}
            type="text"
            name="Name"
            onChange={handleInputChange}
            value={datos.Name}
            required
            className="ContactForm-Input"
            placeholder={`${langEn ? "Your name" : "Tu nombre"}`}
          ></input>
          <label className="ContactForm-Label">Email:</label>
          <input
            maxLength={2000}
            type="email"
            name="Mail"
            onChange={handleInputChange}
            value={datos.Mail}
            required
            className="ContactForm-Input"
            placeholder={`${
              langEn ? "youremail@email.com" : "tumail@email.com"
            }`}
          ></input>
          <label className="ContactForm-Label">
            {langEn ? "Message: " : "Mensaje: "}
          </label>
          <textarea
            type="text"
            name="Message"
            onChange={handleInputChange}
            value={datos.Message}
            required
            maxLength={2000}
            className="ContactForm-TextArea"
            placeholder={`${
              langEn ? "¡Hello! My name is..." : "Hola! Mi nombre es.."
            }`}
          ></textarea>
          <button
            type="submit"
            className="ContactForm-Button Button Button__big Button__blue"
          >
            {langEn ? "Send" : "Enviar"}
          </button>
          <div className="ContactResponseContainer">{response}</div>
        </form>
      </div>
    </div>
  );
}
