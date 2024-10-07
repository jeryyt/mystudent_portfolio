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
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="flex h-full flex-col justify-between"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      viewport={{
        amount: 0.55,
        once: true,
      }}
    >
      <motion.div
        className="flex grow items-center gap-5 self-end"
        variants={variants}
      >
        <p className="text-right text-xl font-extralight">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-[500px] border-t border-t-gray-500/80" />
      </motion.div>

      <motion.div
        className="flex grow-[2] flex-col items-center"
        variants={variants}
      >
        <div className="flex items-center gap-12">
          <img
            src="/people.webp"
            alt="Business meeting"
            className="h-[100px] w-[300px] rounded-full object-cover"
          />
          <p className="cursor-default text-8xl font-thin">
            <span className="font-bold transition ease-out hover:text-yellow-600">
              Unique
            </span>{" "}
            Ideas
          </p>
        </div>

        <p className="mt-3 cursor-default text-8xl font-thin">
          <span className="font-bold transition ease-out hover:text-yellow-600">
            For Your
          </span>{" "}
          Business
        </p>
      </motion.div>

      <motion.div
        className="m-auto mb-14 flex max-w-7xl grow-[2]"
        variants={variants}
      >
        <motion.div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            Branding
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </motion.div>

        <motion.div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            Branding
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </motion.div>

        <div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            Branding
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </div>

        <div
          className="flex cursor-default flex-col justify-center border border-gray-300 p-12
            transition ease-out hover:bg-gray-400 hover:text-black"
        >
          <h2 className="mb-10 text-3xl font-medium tracking-wider">
            Branding
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
