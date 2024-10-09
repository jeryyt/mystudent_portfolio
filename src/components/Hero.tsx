import { motion, Variants } from "framer-motion";
import { ReactTyped } from "react-typed";

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero-container relative overflow-hidden">
      <div className="relative z-10 m-auto h-full max-w-7xl">
        <motion.div
          className="flex h-full w-1/2 flex-col justify-center gap-10 max-lg:mt-12 max-lg:h-1/2
            max-lg:w-full max-lg:items-center max-lg:gap-5 max-lg:text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-3xl tracking-[10px] max-lg:text-2xl"
            variants={textVariants}
          >
            Hi I'm <span className="text-purple-800">Reed</span>
          </motion.h2>
          <motion.h1
            className="text-[88px] font-bold tracking-wider max-lg:text-5xl"
            variants={textVariants}
          >
            <ReactTyped
              strings={["Full Stack", "Front End", "Back End"]}
              typeSpeed={90}
              backDelay={1100}
              backSpeed={90}
              loop
            />{" "}
            <br />
            Developer
          </motion.h1>

          <motion.div variants={textVariants} className="max-lg:mt-5">
            <motion.button
              className="mr-5 cursor-pointer rounded-md border border-white bg-yellow-600 p-5 font-light
                text-white transition ease-out hover:bg-transparent"
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="rounded-md border border-white bg-transparent p-5 font-light text-white
                transition ease-out hover:bg-gray-400 hover:text-black"
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img
            src="/scroll.png"
            alt="scolldown image"
            className="w-[50px]"
            variants={textVariants}
            animate="scrollBtn"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[-120px] w-1/2 whitespace-nowrap text-[50vh] font-bold
          text-[#ffffff09]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React Typescript NodeJS PostgreSQL Express
      </motion.div>

      <div
        className="absolute right-0 h-full max-lg:bottom-0 max-lg:h-1/2 max-lg:w-full lg:-right-20
          lg:top-0"
      >
        <img
          src="/hero.png"
          alt="Reed's picture"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
