import { ResearchPageBody, ResearchPageHeader } from "./components";
import "./ResearchPage.css";

const ResearchPage = (props) => {
  return (
    <div className="research-page-wrapper">
      <div className="research-page">
        <ResearchPageHeader {...props} />
        <ResearchPageBody {...props} />
      </div>
    </div>
  );
};

export default ResearchPage;
