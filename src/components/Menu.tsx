import Logo from "../svgs/Logo.tsx";
import { NavLink } from "react-router-dom";
import {
  PersonGear,
  CloudArrowUp,
  DatabaseAdd,
  Gear,
  InfoCircle,
} from "react-bootstrap-icons";

const iconColor: string = "white",
  iconSize: number = 38;

function Tabs() {
  return (
    <div className="tabs">
      <NavLink to="/">
        <div>
          <PersonGear color={iconColor} size={iconSize} />
        </div>
      </NavLink>
      <NavLink to="/file-upload">
        <div>
          <CloudArrowUp color={iconColor} size={iconSize} />
        </div>
      </NavLink>
      <NavLink to="/peer">
        <div>
          <DatabaseAdd color={iconColor} size={iconSize} />
        </div>
      </NavLink>
      <NavLink to="/setting">
        <div>
          <Gear color={iconColor} size={iconSize} />
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
