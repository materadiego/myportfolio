import icon from "../../Assets/Images/aboutme-icon.png";

export default function AboutMe() {
  return (
    <section className="AboutMe" id="AboutMe">
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <div className=" AboutMe-Title">
            <p className="AboutMe-Title__Span Title SectionTitle">
              {" "}
              <img src={icon} alt="About-Me"></img>About Me{" "}
            </p>
          </div>
          <p className="Text">
            Born in Buenos Aires, Argentina in the early 90's. I've always been
            a proactive guy, constantly learning and improving my skills. I've
            been working as an Audio & Lighting technician for a decade,
            particulary with DMX lighting shows (using Avolites interface).
            Working with DMX programming made me very interested in learning
            about different programming languages, so I started studying Web
            Design (Frontend Development) & I am actually working as a
            freelancer. I'm working on getting my certification as Fullstack
            Javascript Developer. Some of my other interests are AWS,
            Cibersecurity & Software Development
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
    </section>
  );
}
