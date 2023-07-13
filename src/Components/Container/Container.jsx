import AboutMe from "../AboutMe/AboutMe";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skils";

export default function Container() {
  return (
    <div className="PageContainer">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}
