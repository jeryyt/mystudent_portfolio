import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <section className="h-screen snap-center" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center" id="Services">
        Parallax
      </section>
      <section className="h-screen snap-center">Services</section>
      <section className="h-screen snap-center" id="Portfolio">
        Parallax
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
