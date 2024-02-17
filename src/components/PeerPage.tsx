import { motion } from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";

export default function PeerPage() {
  return (
    <motion.div
      className="content"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      PeerPage
    </motion.div>
  );
}
