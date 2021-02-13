import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Baby Driver
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink
              to="/"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Home/Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userhome"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              User Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addnewitem"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Admin New Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usershoppingcart"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              User Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
