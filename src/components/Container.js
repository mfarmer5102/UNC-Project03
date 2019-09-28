import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Overview from "./Overview";
import LiquidAssets from "./LiquidAssets";
import FrozenAssets from "./FrozenAssets";
import Liabilities from "./Liabilities";

function Container() {
  return (
    <div>
      <Route exact path="/" component={Overview} />
      <Route exact path="/liquidassets" component={LiquidAssets} />
      <Route exact path="/frozenassets" component={FrozenAssets} />
      <Route exact path="/liabilities" component={Liabilities} />
    </div>
  );
}

export default Container;
