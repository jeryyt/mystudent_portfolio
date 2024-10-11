import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";

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
      <div className="relative z-10 m-auto h-full max-w-7xl">
        <div
          className="flex h-full w-1/2 flex-col justify-center gap-10 max-lg:mt-12 max-lg:h-1/2
            max-lg:w-full max-lg:items-center max-lg:gap-5 max-lg:text-center"
        >
          <h2 className="text-3xl tracking-[10px] max-lg:text-2xl">
            Hi I'm <span className="text-purple-800">Reed</span>
          </h2>

          <h1 className="text-[88px] font-bold tracking-wider max-lg:text-5xl">
            Full Stack
            <br />
            Developer
          </h1>

          <div className="flex items-center max-lg:mt-5">
            {/* download cv */}
            <a
              href="/resume.pdf" // file in public dir
              download="Reed_Resume.pdf"
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
          className="absolute bottom-[-120px] w-1/2 whitespace-nowrap text-[50vh] font-bold
            text-[#ffffff09]"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          style={{ willChange: "transform" }}
        >
          React Typescript NodeJS PostgreSQL Express
        </motion.div>
      )}

      <div
        className="absolute right-0 h-full max-lg:bottom-0 max-lg:h-1/2 max-lg:w-full lg:-right-20
          lg:top-0"
      >
        <img
          src="/hero.webp"
          alt="Reed's picture"
          className="size-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
