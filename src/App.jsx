import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Single from "./Single/Single";
function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singel" element={<Single />} />

      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
