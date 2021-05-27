import { MainPageBody, MainPageHeader } from "./components";
import "./MainPage.css";

const MainPage = (props) => {
  return (
    <div className="main-page-wrapper">
      <div className="main-page">
        <MainPageHeader {...props} />
        <MainPageBody {...props}/>
      </div>
    </div>
  );
};

export default MainPage;
