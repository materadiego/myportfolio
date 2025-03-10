import ProfileImg from "../../Assets/Images/avatar2.png";

export default function Hero({ langEn }) {
  return (
    <div className="Hero">
      <div className="HeroContainer">
        <div className="mobile">
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
        </div>
        <p className="HeroParallaxContent-Title Title">
          {langEn ? "Welcome to my portfolio!" : "Bienvenido a mi portfolio!"}
        </p>

        <p className="HeroParallaxContent-Text Text">
          {langEn
            ? ` Hi! I'm Diego, a Frontend Developer passionate about interactivity and creating seamless digital experiences. My approach is minimalist, clean, and modern, always striving for the perfect balance between aesthetics and performance.`
            : `¡Hola! Soy Diego, un Frontend Developer apasionado por la interactividad y la creación de experiencias digitales fluidas. Mi enfoque es minimalista, limpio y moderno, buscando siempre un equilibrio entre estética y rendimiento.`}{" "}
        </p>
        <p className="HeroParallaxContent-Text Text">
          {langEn
            ? `I specialize in JavaScript, React, Next.js, NestJS, Firebase, Node.js, CSS, SASS, GSAP, and Anime.js, with a strong focus on subtle, optimized animations that enhance user experience without overwhelming it.`
            : `Me especializo en tecnologías modernas como React y Next.js, animaciones con GSAP, y optimización con Firebase y NestJS. Con un gran interés en la interactividad, trabajo con animaciones sutiles y optimizadas que mejoren la experiencia del usuario sin saturarla.`}
        </p>
        <p className="HeroParallaxContent-Text Text">
          {langEn
            ? `I enjoy working in teams, learning from others, and sharing knowledge. I'm always looking for new ways to improve my skills and craft dynamic interfaces that evoke sensations and make navigation feel intuitive.`
            : `Disfruto trabajar en equipo, aprender de otros y compartir conocimientos. Siempre busco nuevas formas de mejorar mis habilidades y crear interfaces dinámicas que generen sensaciones y hagan que la navegación se sienta intuitiva.`}
        </p>
        <p className="HeroParallaxContent-Text Text">
          {langEn
            ? `🚀 Shall we build something amazing together?`
            : `🚀 Si tienes un proyecto en mente, hablemos.?`}
        </p>
      </div>
    </div>
  );
}
