import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// paginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Treianando hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
