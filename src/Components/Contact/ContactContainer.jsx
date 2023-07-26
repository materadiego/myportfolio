import linkedin from "../../Assets/Images/socialmedia-in.png";
import instagram from "../../Assets/Images/socialmedia-ig.png";
import youtube from "../../Assets/Images/socialmedia-yt.png";
import Loader from "../../Assets/Images/loader.svg";
import { useState } from "react";

export default function ContactContainer() {
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
      <div className="ShadowContainer ShadowContainer__TopRight">
        <div className="ShadowContainerShadow ShadowContainerShadow__TopLeft "></div>
      </div>
      <div className="ShadowContainer ShadowContainer__TopLeft">
        <div className="ShadowContainerShadow ShadowContainerShadow__TopRight"></div>
      </div>
      <div className="ContactContainer">
        <div className="ContactContainer-Subcontainer">
          <h4 className="ContactContainer-Title Title">Contact</h4>
          <p className="ContactContainer-Text Text">
            For more information you can send me an email through the next form.
          </p>
          <h4 className="ContactContainer-Title Title">Social Media</h4>
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
          <label className="ContactForm-Label">Name:</label>
          <input
            maxLength={2000}
            type="text"
            name="Name"
            onChange={handleInputChange}
            value={datos.Name}
            required
            className="ContactForm-Input"
            placeholder="Your name"
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
            placeholder="youremail@email.com"
          ></input>
          <label className="ContactForm-Label">Message:</label>
          <textarea
            type="text"
            name="Message"
            onChange={handleInputChange}
            value={datos.Message}
            required
            maxLength={2000}
            className="ContactForm-TextArea"
            placeholder="¡Hello! My name is..."
          ></textarea>
          <button type="submit" className="ContactForm-Button Button">
            Submit
          </button>
          <div className="ContactResponseContainer">{response}</div>
        </form>
      </div>
      <div className="ShadowContainer ShadowContainer__BottomRight">
        <div className="ShadowContainerShadow ShadowContainerShadow__BottomLeft "></div>
      </div>
      <div className="ShadowContainer ShadowContainer__BottomLeft">
        <div className="ShadowContainerShadow ShadowContainerShadow__BottomRight"></div>
      </div>
    </div>
  );
}
