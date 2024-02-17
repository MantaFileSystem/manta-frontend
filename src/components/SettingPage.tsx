import { motion } from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";

export default function SettingPage() {
  return (
    <motion.div
      className="content"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      SettingPage
    </motion.div>
  );
}
