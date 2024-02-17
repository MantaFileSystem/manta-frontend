import { useEffect, useState } from "react";
import { Clock } from "react-bootstrap-icons";
import { Row, Col, Container } from "react-bootstrap";

const TimeBar = () => {
  const [time, setTime] = useState(new Date());

  const update = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  useEffect(update, []);

  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const date = time.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [m, d, y] = date.split(" ");
  const day = d.replace(",", "");

  return (
    <div
      className="time-bar-container"
      style={{ justifyContent: "space-between" }}
    >
      <div className="time-bar-left">
        <span className="time-text">
          <Clock /> {}
          {formattedTime}
        </span>
      </div>
      {}
      <div className="time-bar-right">
        <span className="time-text">
          {day} {m} {y}{" "}
        </span>
      </div>
    </div>
  );
};

export default TimeBar;
