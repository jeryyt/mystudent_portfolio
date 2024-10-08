import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <section className="h-screen px-1" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section className="h-screen" id="Services"> */}
      {/*   <Parallax type="services" /> */}
      {/* </section> */}
      {/* <section className="my-linear-gradient h-screen"> */}
      {/*   <Services /> */}
      {/* </section> */}
      {/* <section className="h-screen" id="Portfolio"> */}
      {/*   <Parallax type="portfolio" /> */}
      {/* </section> */}
      {/* <Portfolio /> */}
      {/* <section className="h-screen" id="Contact"> */}
      {/*   <Contact /> */}
      {/* </section> */}
    </>
  );
}

export default App;
