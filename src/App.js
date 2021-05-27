import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import ResearchPage from "./containers/ResearchPage/ResearchPage";
import { ErrorRoute } from "./pres-components";

const App = (props) => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <MainPage {...props} />
      </Route>
      <Route path={"/research"} exact>
        <ResearchPage {...props} />
      </Route>
      <Route>
        <ErrorRoute />
      </Route>
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.appReducer.carData,
  };
};

export default compose(withRouter, connect(mapStateToProps, {}))(App);
