import ContactBg from "../../Assets/Images/skills-bg44.jpg";

import { Parallax } from "react-parallax";
import ContactContainer from "./ContactContainer";

export default function Contact() {
  return (
    <section className="Contact" id="Contact">
      <Parallax strength={-300} bgImage={ContactBg}>
        <ContactContainer />
      </Parallax>
    </section>
  );
}
