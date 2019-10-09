import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Overview from "./Overview";
import SourceDetail from "./SourceDetail";
import LiquidAssets from "./LiquidAssets";
import FrozenAssets from "./FrozenAssets";
import Liabilities from "./Liabilities";
import AddNewEntry from "./AddNewEntry";
import AddNewSource from "./AddNewSource";

function Container() {
  return (
    <div className="p-3 pt-5 full-height">
      <Route exact path="/" component={Overview} />
      <Route exact path="/liquidassets" component={LiquidAssets} />
      <Route exact path="/frozenassets" component={FrozenAssets} />
      <Route exact path="/liabilities" component={Liabilities} />
      <Route exact path="/sourcedetail" component={SourceDetail} />
      <Route exact path="/addnewsource" component={AddNewSource} />
      <Route exact path="/addnewentry" component={AddNewEntry} />
    </div>
  );
}

export default Container;
