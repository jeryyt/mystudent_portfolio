import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  const handleClick = (
    sect: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sect);
    // adjust the margin top val as needed
    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;

      window.scrollTo({ top: scrollToY, behavior: "smooth" });
      setOpen(false); // closed the sidebar
    }
  };

  return (
    <motion.div
      className="flex size-full flex-col items-center justify-center gap-10"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          key={item}
          href=""
          className="cursor-pointer text-4xl max-sm:text-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleClick(item, e)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
