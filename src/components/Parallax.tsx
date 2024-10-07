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
      <motion.h2 className="text-8xl" style={{ y: yText }}>
        {type === "services" ? "What I Do" : "My Projects"}
      </motion.h2>

      <div
        style={{
          background: "url(/mountains.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="absolute z-[3] size-full"
      />

      <motion.div
        style={{
          y: yBg,
          background: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="absolute z-[2] size-full"
      />

      <motion.div
        style={{
          x: yBg,
          background: "url(/stars.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="absolute z-[1] size-full"
      />
    </div>
  );
};

export default Parallax;
