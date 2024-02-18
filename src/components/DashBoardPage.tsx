import { motion } from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";
import { Container } from "react-bootstrap";

import SearchBar from "./SearchBar.tsx";
import TimeBar from "./TimeBar.tsx";
import Infor from "./Infor.tsx";
import Traffic from "../svgs/netTraffic.png";
import Bandwidth from "../svgs/Bandwidth.png";

export default function DashBoardPage() {
  return (
    <motion.div
      className="content"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      <div className="page">
        <div className="dashboard">
          <div className="dashboard-header">
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: " 10px 40px 10px 40px",
              }}
            >
              <SearchBar></SearchBar>
              <TimeBar></TimeBar>
            </Container>
          </div>
          <div className="dashboard-bandwidth">
            <div style={{ margin: "10px 0px 20px 80px" }}>
              BANDWIDTH OVER TIME
            </div>
            <img
              width="830px"
              style={{
                margin: " 0px 0px 0px 80px",
              }}
              src={Bandwidth}
              alt=""
            />
          </div>
          <div className="dashboard-traffic">
            <div style={{ margin: "20px 0px 00px 80px" }}>NETWORK TRAFFIC</div>
            <img
              width="830px"
              style={{
                margin: "20px 0px 0px 70px",
              }}
              src={Traffic}
              alt=""
            />
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
