import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.svg";
import "./HeaderIcon.css";

export const HeaderIcon = () => {
  return (
    <div className="header-icon-wrapper">
      <NavLink to="/">
        <div className="header-icon">
          <img src={headerLogo} alt="wheel" />
        </div>
      </NavLink>
    </div>
  );
};
