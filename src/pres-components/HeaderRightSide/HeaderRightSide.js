import { HeaderRightSideOptions } from "./components";
import "./HeaderRightSide.css";

export const HeaderRightSide = (props) => {
  return (
    <div className="header-right-side-wrapper">
      <div className="header-right-side">
        <HeaderRightSideOptions />
        <div className="header-right-side__button">
          <span>Войти</span>
        </div>
      </div>
    </div>
  );
};
