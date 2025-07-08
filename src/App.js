import { useEffect, useState } from "react";
import { Content } from "./Components/Content";
import { Presentation } from "./Components/Presentation";
import "./scss/Styles.scss";

function App() {
  const [view, setView] = useState("presentation");
  const [english, setEnglish] = useState(true);
  const toggleLanguage = () => {
    setEnglish(!english);
  };
  const renderView = (view) => {
    console.log(view);
    switch (view) {
      case "content":
        return (
          <Content
            setView={setView}
            english={english}
            toggleLanguage={toggleLanguage}
          />
        );
      case "hero":
        return (
          <Presentation
            setView={setView}
            english={english}
            toggleLanguage={toggleLanguage}
          />
        );
      default:
        return (
          <Presentation
            setView={setView}
            english={english}
            toggleLanguage={toggleLanguage}
          />
        );
    }
  };

  useEffect(() => {
    renderView(view);
  }, [view]);
  return <div className="App">{renderView(view)}</div>;
}

export default App;
