import { motion } from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";
import { Container } from "react-bootstrap";

import SearchBar from "./SearchBar.tsx";
import TimeBar from "./TimeBar.tsx";
import Infor from "./Infor.tsx";
import Traffic from "../svgs/netTraffic.tsx";
import Bandwidth from "../svgs/Bandwidth.tsx";

export default function DashBoardPage() {
  return (
    <motion.div
      className="content"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      {/* <SearchBar />
      <TimehBar /> */}
      <div className="page">
        <div className="dashboard">
          <div className="dashboard-header">
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <SearchBar></SearchBar>
              <TimeBar></TimeBar>
            </Container>
          </div>
          <div className="dashboard-bandwidth">
            <div style={{ margin: "0px 0px 20px 50px" }}>
              BANDWIDTH OVER TIME
            </div>{" "}
            <div style={{ margin: "0px 0px 10px 0px" }}>
              <Bandwidth></Bandwidth>
            </div>
          </div>
          <div className="dashboard-traffic">
            <div style={{ margin: "0px 0px 20px 50px" }}>NETWORK TRAFFIC</div>
            <div style={{ margin: "0px 0px 0px 0px" }}>
              <Traffic></Traffic>
            </div>
          </div>
        </div>
        <div className="info">
          <Container>
            <Infor></Infor>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}
