import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HooksUseContext } from "./components/HooksUseContext";

// paginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HooksUseContext>
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
      </HooksUseContext>
    </div>
  );
}

export default App;
