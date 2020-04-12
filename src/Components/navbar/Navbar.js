import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container">
        {/* <a className="brand-logo">NBA League</a> */}
        <ul>
          <li>
            <NavLink to="/">NBA Teams</NavLink>
          </li>
          <li>
            <NavLink to="/AllPlayers">All Players</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
