import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Development from "../Development/Development";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skils";

export default function Container() {
  return (
    <div className="PageContainer">
      <Hero />
      <AboutMe />
      <Skills />
      <Development />
      <Contact />
    </div>
  );
}
