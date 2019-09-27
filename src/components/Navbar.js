import React from "react";
// import "./style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Overview
        </Link>
      </li>
      <li className="list-group-item">
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
      </li>
      <li className="list-group-item">
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
      </li>
      <li className="list-group-item">
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
      </li>
    </ul>
  );
}

export default Navbar;
