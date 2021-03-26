import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Kurt Phillips
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link
              to="/bio"
              className={location.pathname === "/bio" ? "nav-link active" : "nav-link"}
            >
              Bio
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
