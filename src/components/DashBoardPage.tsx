import {motion} from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";

export default function DashBoardPage() {
    return (
        <motion.div 
            className="content"
            initial="initial"
            animate="final"
            variants={routeVariants}
        >
            DashBoardPage</motion.div>);
}