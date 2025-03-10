import ContactBg from "../../Assets/Images/contact-bg8.jpg";

import { Parallax } from "react-parallax";
import ContactContainer from "./ContactContainer";

export default function Contact({ langEn }) {
  return (
    <section className="Contact" id="Contact">
      <Parallax strength={100} bgImage={ContactBg}>
        <ContactContainer langEn={langEn} />
      </Parallax>
    </section>
  );
}
