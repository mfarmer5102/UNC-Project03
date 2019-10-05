import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Overview from "./Overview";
import SourceDetail from "./SourceDetail";
import LiquidAssets from "./LiquidAssets";
import FrozenAssets from "./FrozenAssets";
import Liabilities from "./Liabilities";

function Container() {
  return (
    <div className="p-3 pt-5">
      <Route exact path="/liquidassets" component={LiquidAssets} />
      <Route exact path="/frozenassets" component={FrozenAssets} />
      <Route exact path="/liabilities" component={Liabilities} />
      <Route exact path="/sourcedetail" component={SourceDetail} />
    </div>
  );
}

export default Container;
