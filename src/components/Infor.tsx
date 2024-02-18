import { Col, Container } from "react-bootstrap";
import Coin from "../svgs/orcaCoin.tsx";
import Orca from "../svgs/orca.tsx";

export default function Infor() {
  return (
    <div>
      <Col
        className="text-center"
        style={{
          margin: "20px 20px 20px 20px",
          fontFamily: "Kanit, sans-serif",
          width: "90%",
        }}
      >
        <h2 style={{ margin: "50px 0px 20px 20px", color: "#12486B" }}>
          Welcome to OrcaCoin
        </h2>
        <div style={{ margin: "20px 0px 70px 20px" }}>Node Connected</div>
        <div className="md">
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0px 20px 20px",
              cursor: "pointer",
            }}
          >
            <div style={{ marginRight: "5px" }}>Balance:</div>
            <Coin />
            <div style={{ marginLeft: "5px" }}>1000</div>
          </Container>
        </div>
        <div style={{ margin: "30px 0px 20px 20px" }}>Peer ID:</div>
        <p
          style={{
            margin: "20px 0px 20px 20px",
            color: "#12486B",
            wordWrap: "break-word",
            cursor: "pointer",
          }}
        >
          12D3KooWM1J3AZKnEvVtEVjwFka2Z2Z9EZo5XVzUoyrAofWRUUWK
        </p>
        <div style={{ margin: "40px 0px 20px 20px" }}>Public Key:</div>
        <p
          style={{
            margin: "20px 0px 20px 20px",
            color: "#12486B",
            wordWrap: "break-word",
            cursor: "pointer",
          }}
        >
          CAESIKY9RkdcwVuPzyQPn2SX7CEJRIj87Y1Mxtm0S5ABQMvI
        </p>
        <div style={{ margin: "30px 0px 5px 20px" }}>Gateway:</div>
        <div
          style={{
            margin: "20px 0px 20px 20px",
            color: "#12486B",
            wordWrap: "break-word",
            cursor: "pointer",
          }}
        >
          http://127.0.0.1:8080
        </div>
        <div
          style={{
            margin: "140px 0px 0px 120px",
            color: "#12486B",
            wordWrap: "break-word",
          }}
        >
          <Orca fill="#12486B" width={180} height={180} />
        </div>
      </Col>
    </div>
  );
}
