import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Overview from "../../../components/Overview";
import SourceDetail from "../../../components/SourceDetail";
import LiquidAssets from "../../../components/LiquidAssets";
import FrozenAssets from "../../../components/FrozenAssets";
import Liabilities from "../../../components/Liabilities";
import LoginContainer from "../../login/login.container";

function Container() {
  return (
    <div className="p-3">
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/liquidassets" component={LiquidAssets} />
      <Route exact path="/frozenassets" component={FrozenAssets} />
      <Route exact path="/liabilities" component={Liabilities} />
      <Route exact path="/sourcedetail" component={SourceDetail} />
    </div>
  );
}

export default Container;
