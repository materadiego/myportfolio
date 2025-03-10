import icon from "../../Assets/Images/aboutme-icon.png";

export default function AboutMe({ langEn }) {
  return (
    <section className="AboutMe" id="AboutMe">
      <div className=" AboutMe-Title">
        <p className="AboutMe-Title__Span Title SectionTitle">
          {" "}
          <img src={icon} alt="About-Me"></img>{" "}
          {langEn ? "About Me" : "Sobre mi"}{" "}
        </p>
      </div>
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <p className="AboutMe-BoxTitle">
            {langEn ? "Beginings:" : "Inicios"}
          </p>
          <p className="AboutMe-Text Text">
            {langEn
              ? ""
              : "Desde niño, siempre me ha fascinado cómo funcionan las cosas. Mi curiosidad me llevó a explorar el sonido, la iluminación y, eventualmente, la programación, donde encontré un mundo lleno de posibilidades creativas."}
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <p className="AboutMe-BoxTitle">
            {langEn
              ? "Venturing into development"
              : "Introducción al desarrollo"}
          </p>

          <p className="AboutMe-Text Text">
            {langEn
              ? ""
              : "Mi experiencia en sonido e iluminación me llevó naturalmente a la programación. Empecé con DMX y luego descubrí el desarrollo frontend, donde encontré una nueva forma de crear experiencias interactivas."}
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
      <article className="AboutMe-TextContainer SectionContainer">
        <div className="AboutMe-TextWrapper">
          <p className="AboutMe-BoxTitle">
            {langEn ? "Present" : "Actualidad"}
          </p>

          <p className="AboutMe-Text Text">
            {langEn
              ? "Currently, I am working as a freelance frontend developer and actively seeking new challenges where I can contribute my ideas and, above all, learn from the results achieved through teamwork. When great minds come together around an idea, the results can be incredible."
              : "Trabajo como frontend developer con experiencia en startups y proyectos freelance, creando interfaces dinámicas y optimizadas. Busco oportunidades en donde pueda aportar mis conocimientos en desarrollo y animaciones, mientras sigo explorando proyectos freelance que me desafíen y me permitan seguir aprendiendo."}
          </p>
        </div>
        <div className="Aboutme-WrapperBg"></div>
      </article>
    </section>
  );
}
