import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { fade, makeStyles } from "@material-ui/core/styles";

const NavBar = () => {
  return (
    <AppBar>
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
    </AppBar>
  );
};

export default NavBar;
