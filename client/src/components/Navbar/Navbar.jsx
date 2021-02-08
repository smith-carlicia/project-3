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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addnewitem"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Add New Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/viewallitems"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              View All Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usersettings"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              User Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/deliverysearch"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Delivery Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/storeavailability"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Store Availability
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
