import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Development from "../Development/Development";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skils";

export default function Container({ langEn }) {
  return (
    <div className="PageContainer">
      <Hero langEn={langEn} />
      <AboutMe langEn={langEn} />
      <Skills langEn={langEn} />
      <Development langEn={langEn} />
      <Contact langEn={langEn} />
    </div>
  );
}
