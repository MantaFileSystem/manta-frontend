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
  GearFill,
} from "react-bootstrap-icons";

const iconColor = "white";
const iconSize = 38;

interface TabProps {
  path: string;
  active: boolean;
  onClick: () => void;
  Icon: React.ElementType;
}

function Tab({ path, active, onClick, Icon }: TabProps) {
  return (
    <NavLink to={path}>
      <div onClick={onClick}>
        {active ? (
          <Icon color={iconColor} size={iconSize} />
        ) : (
          <Icon color={iconColor} size={iconSize} />
        )}
      </div>
    </NavLink>
  );
}

function Tabs({
  active,
  setActive,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const tabs = [
    { path: "/", Icon: active === "/" ? PersonFillGear : PersonGear },
    {
      path: "/file-upload",
      Icon: active === "/file-upload" ? CloudArrowUpFill : CloudArrowUp,
    },
    { path: "/peer", Icon: active === "/peer" ? DatabaseFillAdd : DatabaseAdd },
    { path: "/setting", Icon: active === "/setting" ? GearFill : Gear },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Tab
          key={tab.path}
          path={tab.path}
          active={active === tab.path}
          onClick={() => setActive(tab.path)}
          Icon={tab.Icon}
        />
      ))}
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
  const [active, setActive] = useState(window.location.pathname);

  return (
    <div className="menu">
      <NavLink to="/" onClick={() => setActive("/")}>
        <Logo fill="white" />
      </NavLink>
      <Tabs active={active} setActive={setActive} />
      <Support />
    </div>
  );
}
