import Container from "./Components/Container/Container";
import Cube from "./Components/Cube/Cube";
import NavBar from "./Components/NavBar/NavBar";
import "./scss/Styles.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container />
    </div>
  );
}

export default App;
