import { useState } from "react";
import Container from "./Components/Container/Container";
import NavBar from "./Components/NavBar/NavBar";
import "./scss/Styles.scss";

function App() {
  const [langEn, setLangEn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <NavBar
        langEn={langEn}
        setLangEn={setLangEn}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Container langEn={langEn} />
    </div>
  );
}

export default App;
