import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Overview from "./Overview";
import SourceDetail from "./SourceDetail";
import LiquidAssets from "./LiquidAssets";
import FrozenAssets from "./FrozenAssets";
import Liabilities from "./Liabilities";

function Container() {
  return (
    <div className="p-3">
      <Route exact path="/" component={SourceDetail} />
      <Route exact path="/liquidassets" component={LiquidAssets} />
      <Route exact path="/frozenassets" component={FrozenAssets} />
      <Route exact path="/liabilities" component={Liabilities} />
    </div>
  );
}

export default Container;
