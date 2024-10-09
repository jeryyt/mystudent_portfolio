import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
      className="relative flex size-full items-center justify-center overflow-hidden"
    >
      <motion.h2
        className="text-8xl max-md:text-center max-md:text-7xl"
        style={{ y: yText }}
      >
        {type === "services" ? "What I Do" : "My Projects"}
      </motion.h2>

      <div
        style={{
          backgroundImage: "url(/mountains.png)",
        }}
        className="absolute z-[3] size-full bg-cover bg-bottom max-md:bg-contain
          max-md:bg-no-repeat"
      />

      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
        }}
        className="absolute z-[2] size-full bg-cover bg-bottom max-md:bg-contain
          max-md:bg-no-repeat"
      />

      <motion.div
        style={{
          x: yBg,
          backgroundImage: "url(/stars.png)",
        }}
        className="absolute z-[1] size-full bg-cover bg-bottom"
      />
    </div>
  );
};

export default Parallax;
