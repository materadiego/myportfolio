import linkedin from "../../Assets/Images/socialmedia-in.png";
import instagram from "../../Assets/Images/socialmedia-ig.png";
import youtube from "../../Assets/Images/socialmedia-yt.png";

export default function ContactContainer() {
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
            <a href="#Contact" className="SocialMediaLink">
              <img
                src={linkedin}
                alt="Linkedin"
                className="SocialMediaImage Linkedin"
              ></img>
            </a>
            <a href="#Contact" className="SocialMediaLink">
              <img
                src={instagram}
                alt="Instagram"
                className="SocialMediaImage Instagram"
              ></img>
            </a>
            <a href="#Contact" className="SocialMediaLink">
              <img
                src={youtube}
                alt="YouTube"
                className="SocialMediaImage YouTube"
              ></img>
            </a>
          </div>
        </div>
        <form className="ContactForm">
          <label className="ContactForm-Label">Name:</label>
          <input className="ContactForm-Input" placeholder="Your name"></input>
          <label className="ContactForm-Label">Email:</label>
          <input
            className="ContactForm-Input"
            placeholder="youremail@email.com"
          ></input>
          <label className="ContactForm-Label">Message:</label>
          <textarea
            className="ContactForm-TextArea"
            placeholder="¡Hello! My name is..."
          ></textarea>
          <button className="ContactForm-Button Button">Submit</button>
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
