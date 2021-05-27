import {
  HeaderIcon,
  HeaderMenu,
  HeaderRightSide,
} from "../../../../pres-components";
import "./MainPageHeader.css";

export const MainPageHeader = (props) => {
  return (
    <div className="main-page-header-wrapper">
      <div className="main-page-header">
        <HeaderIcon />
        <HeaderMenu {...props} />
        <HeaderRightSide />
      </div>
    </div>
  );
};
