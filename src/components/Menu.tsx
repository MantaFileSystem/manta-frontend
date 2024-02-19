import Logo from "../svgs/OrcaNetLogo.tsx";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  PersonGear,
  CloudArrowUp,
  DatabaseAdd,
  Gear,
  InfoCircle,
  PersonFillGear,
  CloudArrowUpFill,
  DatabaseFillAdd,
  GearFill
} from "react-bootstrap-icons";

const iconColor: string = "white",
  iconSize: number = 38;

function Tabs() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="tabs">
      <NavLink to="/">
        <div onClick={() => setActive("dashboard")}>
          {active === "dashboard" ? (
            <PersonFillGear color={iconColor} size={iconSize} />
          ) : (
            <PersonGear color={iconColor} size={iconSize} />
          )}
        </div>
      </NavLink>
      <NavLink to="/file-upload">
        <div onClick={() => setActive("file-upload")}>
          {active === "file-upload" ? (
            <CloudArrowUpFill color={iconColor} size={iconSize} />
          ) : (
            <CloudArrowUp color={iconColor} size={iconSize} />
          )}
        </div>
      </NavLink>
      <NavLink to="/peer">
        <div onClick={() => setActive("peer")}>
          {active === "peer" ? (
            <DatabaseFillAdd color={iconColor} size={iconSize} />
          ) : (
            <DatabaseAdd color={iconColor} size={iconSize} />
          )}
        </div>
      </NavLink>
      <NavLink to="/setting">
        <div onClick={() => setActive("setting")}>
          {active === "setting" ? (
            <GearFill color={iconColor} size={iconSize} />
          ) : (
            <Gear color={iconColor} size={iconSize} />
          )}
        </div>
      </NavLink>
    </div>
  );
}

function Support() {
  return (
    <div className="support">
      <div>
        <InfoCircle color={iconColor} size={iconSize - 5} />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="menu">
      <Logo fill="white" />
      <Tabs />
      <Support />
    </div>
  );
}
