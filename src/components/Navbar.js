import React from "react";
import { Link } from "react-router-dom";

var navStyle = {
  display: "inline",
  textAlign: "center"
};

var iconStyle = {
  width: "35px",
  height: "35px"
};

function Navbar() {
  return (
    <div class="p-3" style={navStyle}>
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        <i
          class="fas fa-tachometer-alt border rounded-circle p-2"
          style={iconStyle}
        ></i>
      </Link>
      <Link
        to="/liquidassets"
        className={
          window.location.pathname === "/liquidassets"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <i class="fas fa-tint border rounded-circle p-2" style={iconStyle}></i>
      </Link>
      <Link
        to="/frozenassets"
        className={
          window.location.pathname === "/frozenassets"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <i
          class="fas fa-icicles border rounded-circle p-2"
          style={iconStyle}
        ></i>
      </Link>
      <Link
        to="/liabilities"
        className={
          window.location.pathname === "/liabilities"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <i
          class="fas fa-file-invoice-dollar border rounded-circle p-2"
          style={iconStyle}
        ></i>
      </Link>
    </div>
  );
}

export default Navbar;
