import { motion } from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";

export default function FileUploadPage() {
  return (
    <motion.div
      className="content"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      FileUploadPage
    </motion.div>
  );
}
