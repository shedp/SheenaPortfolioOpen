import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Contact from "./components/Contact";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/projects" element={<Projectpage />} />
        <Route exact path="/contact" element={<Contactpage />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
