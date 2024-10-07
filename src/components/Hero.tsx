import { motion, Variants } from "framer-motion";

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
          className="flex h-full w-1/2 flex-col justify-center gap-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-3xl tracking-[10px] text-purple-800"
            variants={textVariants}
          >
            Arfelo Reed
          </motion.h2>
          <motion.h1 className="text-[88px]" variants={textVariants}>
            Full Stack <br />
            Developer
          </motion.h1>

          <motion.div variants={textVariants}>
            <motion.button
              className="mr-5 cursor-pointer rounded-md border border-white bg-transparent p-5 font-light
                text-white"
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

      <div className="absolute right-10 top-0 h-full">
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
