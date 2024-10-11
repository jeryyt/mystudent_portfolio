import { ReactLenis } from "lenis/react";
// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.06 }}>
      {/* <Cursor /> */}
      <section className="h-screen px-1" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="my-linear-gradient flex items-center justify-center px-1 py-32">
        <Grid />
      </section>
      <section className="h-screen" id="Services">
        <Parallax type="services" />
      </section>
      <section className="my-linear-gradient min-h-screen px-1">
        <Services />
      </section>
      <section className="h-screen" id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section className="min-h-screen" id="Contact">
        <Contact />
      </section>
      <Footer />
    </ReactLenis>
  );
}

export default App;
