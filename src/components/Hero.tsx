import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  const [showTyped, setShowTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyped(true); // start typing animation after 500ms delay
    }, 2000); // adjust this delay as needed

    return () => clearTimeout(timer); // cleanup the timer
  }, []);

  const handleClick = (sect: string) => {
    const element = document.getElementById(sect);
    // adjust the margin top val as needed
    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;

      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container relative overflow-hidden">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-44 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative z-10 m-auto h-full max-w-7xl">
        <div
          className="flex h-full w-1/2 flex-col justify-center gap-10 max-lg:mt-12 max-lg:h-1/2
            max-lg:w-full max-lg:items-center max-lg:gap-5 max-lg:text-center"
        >
          <h2 className="text-3xl tracking-[10px] max-lg:text-2xl">
            Hi I'm <span className="text-purple-800">Jerin</span>
          </h2>

          <h1 className="text-[88px] font-bold tracking-wider max-lg:text-5xl">
            ECE Student &
            <br />
            Developer
          </h1>

          <div className="flex items-center max-lg:mt-5">
            {/* download cv */}
            <a
              href="/Jerin_resume.pdf" // file in public dir
              download="Jerin_resume.pdf"
              className="mr-5 flex cursor-pointer items-center gap-2 rounded-md border border-white
                bg-yellow-600 p-5 font-light text-white transition ease-out hover:bg-transparent"
            >
              <FaDownload /> Download my CV
            </a>
            <button
              className="rounded-md border border-white bg-transparent p-5 font-light text-white
                transition ease-out hover:bg-gray-400 hover:text-black"
              onClick={() => handleClick("Contact")}
            >
              Contact Me
            </button>
          </div>

          <motion.img
            src="/scroll.png"
            alt="scolldown image"
            className="w-[50px]"
            animate={{
              opacity: 0,
              y: 10,
              transition: {
                duration: 3,
                repeat: Infinity,
              },
            }}
            loading="lazy"
            style={{ willChange: "transform" }}
          />
        </div>
      </div>

      {showTyped && (
        <motion.div
          className="absolute bottom-10 z-0 hidden w-full overflow-hidden text-center text-4xl font-bold text-[#ffffff07] md:block"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          style={{ willChange: "transform" }}
      >
          React · TypeScript · NodeJS · PostgreSQL 
        </motion.div>
      )}

      <div
        className="absolute right-[150px]  top-[-50px] h-[500px] w-[400px] max-lg:hidden"
      >
        <img
          src="/hero.webp"
          alt="Reed's picture"
          className="h-full w-full rounded-lg object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
