import "./App.css";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="site-footer">
          <span className="footer-name">Tayo Adegoke</span>
          <span className="footer-copy">© 2026 · Built with care</span>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
