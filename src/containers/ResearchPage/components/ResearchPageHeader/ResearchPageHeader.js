import {
  HeaderIcon,
  HeaderMenu,
  HeaderRightSide,
} from "../../../../pres-components";
import "./ResearchPageHeader.css";

export const ResearchPageHeader = (props) => {
  return (
    <div className="research-page-header-wrapper">
      <div className="research-page-header">
        <HeaderIcon />
        <HeaderMenu {...props} />
        <HeaderRightSide />
      </div>
    </div>
  );
};
