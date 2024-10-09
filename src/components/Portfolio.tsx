import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// images
import iphone from "/iphone.webp";
import nike from "/nike.webp";
import passGen from "/passGen.webp";
import keeper from "/keeper.webp";

const items = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    img: iphone,
    desc: "A sleek, pixel-perfect clone of the iPhone 15 Pro landing page, built with React, TypeScript, and TailwindCSS. Stunning 3D visuals powered by ThreeJS.",
    link: "https://reediphone.netlify.app",
  },
  {
    id: 2,
    title: "Nike",
    img: nike,
    desc: "A bold, dynamic landing page for Nike shoes, showcasing responsive design and smooth animations. Created using React and TailwindCSS.",
    link: "https://nikereed.netlify.app/",
  },
  {
    id: 3,
    title: "Password Manager",
    img: passGen,
    desc: "A secure, full stack password management app, designed for efficient password storage and retrieval. Built with React, Node.js, and PostgreSQL.",
    link: "https://reedpassgen.netlify.app/",
  },
  {
    id: 4,
    title: "Keeper",
    img: keeper,
    desc: "A full stack clone of Google Keep for note-taking and organization, developed with Node.js, React, and PostgreSQL for real-time syncing and storage.",
    link: "https://keeper-ol3w.onrender.com/",
  },
];

const Single = ({
  item,
}: {
  item: { id: number; title: string; img: string; desc: string; link: string };
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="h-screen overflow-hidden px-1">
      <div
        className="mx-auto flex size-full max-w-7xl items-center justify-center gap-12
          overflow-hidden max-lg:flex-col"
      >
        <div className="h-1/2 w-full max-lg:h-[300px]" ref={ref}>
          <img
            src={item.img}
            alt={item.title}
            className="size-full object-cover max-lg:object-contain"
          />
        </div>

        <motion.div
          className="flex flex-col gap-8 max-lg:!transform-none max-lg:items-center max-lg:gap-4
            max-lg:text-center"
          style={{ y }}
        >
          <h2 className="text-7xl max-lg:text-5xl">{item.title}</h2>
          <p
            className="my-3 text-justify text-xl max-lg:my-1 max-lg:px-2 max-lg:text-center
              max-lg:text-base max-lg:font-light"
          >
            {item.desc}
          </p>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-[200px] rounded-md bg-yellow-600 py-2 text-center transition ease-out
              hover:bg-gray-400 hover:text-black"
          >
            See Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative" ref={ref}>
      <div
        className="sticky left-0 top-0 z-10 mx-auto max-w-7xl bg-[#0c0c1d] pt-12 text-center
          max-lg:mb-12"
      >
        <p className="text-5xl font-medium tracking-wider text-yellow-600 max-lg:text-4xl">
          Featured Works
        </p>

        <motion.div
          style={{ scaleX }}
          className="mt-2 h-[10px] rounded-full border-none bg-white outline-none ring-0 focus:ring-0"
        />
      </div>

      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
