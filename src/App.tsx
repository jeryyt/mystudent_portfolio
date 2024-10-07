import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Services from "./components/Services";

function App() {
  return (
    <>
      <section className="h-screen snap-center" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center" id="Services">
        <Parallax type="services" />
      </section>
      <section className="my-linear-gradient h-screen snap-center">
        <Services />
      </section>
      <section className="h-screen snap-center" id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section className="h-screen snap-center">Portfolio</section>
      <section className="h-screen snap-center">Portfolio</section>
      <section className="h-screen snap-center">Portfolio</section>
      <section className="h-screen snap-center" id="Contact">
        Contact
      </section>
    </>
  );
}

export default App;
