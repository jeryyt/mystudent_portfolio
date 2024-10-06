import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="h-[100px]">
      <Sidebar />

      <div className="m-auto flex h-full max-w-7xl items-center justify-between">
        <motion.span
          className="font-bold uppercase"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Arfelo Reed
        </motion.span>

        <div className="flex gap-5">
          <a href="#">
            <img src="/facebook.png" alt="facebook" width={18} height={18} />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram" width={18} height={18} />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube" width={18} height={18} />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribble" width={18} height={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
