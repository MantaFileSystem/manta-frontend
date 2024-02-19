import { motion } from "framer-motion";
import { routeVariants } from "../../helper/RouterAnimation";

import MainSetting from "./MainSetting";

function OrcaCoinConnection() {
  return <div className="orca-coin-connection">asas</div>;
}

export default function SettingPage() {
  return (
    <motion.div
      className="content setting"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      <MainSetting />
      <OrcaCoinConnection />
    </motion.div>
  );
}
