import React from "react";
import { Link } from "react-router-dom";

var navStyle = {
  background: "purple",
  minHeight: "100%"
};

function Navbar() {
  return (
    <div class="p-3" style={navStyle}>
      <h5 class="text-light">Networthy</h5>

      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Overview
      </Link>
      <Link
        to="/liquidassets"
        className={
          window.location.pathname === "/liquidassets"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Liquid Assets
      </Link>
      <Link
        to="/frozenassets"
        className={
          window.location.pathname === "/frozenassets"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Frozen Assets
      </Link>
      <Link
        to="/liabilities"
        className={
          window.location.pathname === "/liabilities"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Liabilities
      </Link>
    </div>
  );
}

export default Navbar;
