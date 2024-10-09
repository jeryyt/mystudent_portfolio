import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.3,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="flex h-full flex-col justify-between lg:min-h-screen"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      viewport={{
        margin: "180px",
        amount: 0.05,
        once: true,
      }}
    >
      <motion.div
        className="flex w-1/2 grow items-center gap-5 self-end max-lg:my-8 max-lg:w-full
          max-lg:flex-col max-lg:justify-center max-lg:self-center max-lg:text-center"
        variants={variants}
      >
        <p className="text-right text-xl font-extralight max-lg:text-center">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-full max-w-[500px] border-t border-t-gray-500/80" />
      </motion.div>

      <motion.div
        className="flex grow-[2] flex-col items-center max-lg:my-8 max-lg:w-full"
        variants={variants}
      >
        <div className="flex items-center gap-12 max-lg:flex-col max-lg:gap-5 max-lg:text-center">
          <img
            src="/people.webp"
            alt="Business meeting"
            className="h-[100px] w-[300px] rounded-full object-cover"
          />
          <p className="cursor-default text-8xl font-thin max-lg:text-5xl">
            <span className="font-bold transition ease-out hover:text-yellow-600">
              Unique
            </span>{" "}
            Ideas
          </p>
        </div>

        <p className="mt-3 cursor-default text-8xl font-thin max-lg:text-center max-lg:text-5xl">
          <span className="font-bold transition ease-out hover:text-yellow-600">
            For Your
          </span>{" "}
          Business
        </p>
      </motion.div>

      <motion.div
        className="m-auto mb-14 flex max-w-7xl grow-[2] max-lg:w-full max-lg:flex-col"
        variants={variants}
      >
        <motion.div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black max-lg:border-none"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            Full Stack Development
          </h2>
          <p>
            From front-end interfaces to robust back-end systems, I deliver
            scalable web applications that bring ideas to life. My expertise
            covers modern frameworks like React, Node.js, and TypeScript,
            ensuring high performance and seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black max-lg:border-none"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            UI/UX Design
          </h2>
          <p>
            Crafting intuitive, user-centered designs that enhance usability and
            engagement. I blend creativity with functionality to create sleek,
            responsive designs that users love.
          </p>
        </motion.div>

        <div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black max-lg:border-none"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            API & System Integration
          </h2>
          <p>
            I build and integrate APIs, ensuring that your application
            communicates seamlessly with external services and databases. My
            experience with REST ensures efficient data exchange.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
