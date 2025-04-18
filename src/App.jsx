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
    <div>
      <Header />
      {/* <Single/> */}
      <Home />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
