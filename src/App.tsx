import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="h-screen snap-center" id="Homepage">
        <Navbar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h2 className="text-5xl text-red-400/80">Just a sample.</h2>
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
