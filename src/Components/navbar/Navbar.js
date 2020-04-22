import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavHeader,
  NavCenter,
  NavLeft,
  NavRight,
  Input,
  MenuLink,
} from "../_styledComponents/navBar";

function Navbar() {
  // return (
  //   <nav>
  //     <div className="container">
  //       {/* <a className="brand-logo">NBA League</a> */}
  //       <ul>
  //         <li>
  //           <NavLink to="/">NBA Teams</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/AllPlayers">All Players</NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
  return (
    <Nav>
      <NavHeader>
        <NavLeft>NBA LEAGUE</NavLeft>
        <NavCenter>
          <Input type="text" placeholder="Search" />
        </NavCenter>
        <NavRight>
          <MenuLink>
            {" "}
            <NavLink to="/">NBA Teams</NavLink>
          </MenuLink>
          <MenuLink>
            <NavLink to="/AllPlayers">All Players</NavLink>
          </MenuLink>
          <MenuLink>
            <NavLink to="/Login">Login</NavLink>
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

export default Navbar;
