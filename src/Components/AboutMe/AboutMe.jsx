import icon from "../../Assets/Images/aboutme-icon.png";

export default function AboutMe() {
  return (
    <section className="AboutMe" id="AboutMe">
      <div className=" AboutMe-Title">
        <p className="AboutMe-Title__Span Title SectionTitle">
          {" "}
          <img src={icon} alt="About-Me"></img>About Me{" "}
        </p>
      </div>
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <p className="AboutMe-BoxTitle">Beginings:</p>
          <p className="AboutMe-Text Text">
            Born in Buenos Aires in the early 90s, I have always been a person
            driven by curiosity. Since I was a child, I have been fascinated by
            how things work, from simple to more complex processes, mechanisms,
            natural phenomena, and many other things.
            <br /> Over the years, my passion grew, and I began studying the
            mechanics of sound, the study of waves, and their propagation. This
            study led me to explore atmospheric sciences, and I became charmed
            by physical oceanography and meteorology. Their unique and
            unpredictable phenomena make them fascinating and perfect.
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <p className="AboutMe-BoxTitle">Venturing into development:</p>

          <p className="AboutMe-Text Text">
            After many years working as a sound technician, I embarked on a
            self-taught journey to learn DMX lighting programming, as the two
            fields often go hand in hand. Starting with simple tasks like
            programming LED lights, this new world began to spark a sense of new
            challenges that I wanted to tackle. I delved deeper into this
            adventure, learning advanced interfaces for luminary programming.
            <br /> As time passed, my interest in lighting led me to explore
            programming. I began researching frontend development, and it
            captivated me from the start. One of the first courses I took was on
            CSS, and the feeling I got from crafting styles for a website was
            similar to the experience while programming lighting consoles.
            <br /> These activities allow me to immerse myself and each new
            achievement brings even greater satisfaction than the last. This
            journey led me into the vast and versatile world of programming
            languages and technologies.
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <p className="AboutMe-BoxTitle">Present:</p>

          <p className="AboutMe-Text Text">
            Currently, I am working as a freelance frontend developer and
            actively seeking new challenges where I can contribute my ideas and,
            above all, learn from the results achieved through teamwork. When
            great minds come together around an idea, the results can be
            incredible.
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
    </section>
  );
}
