import './Footer.css';
import React from "react";
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      {new Date().getFullYear()}
      {''}
      - Bambo Adeshiyan, Dempsey Finley-Price, Carlicia Smith
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer className="container">
    <div className="row">
    <NavLink id="footerItems" to="/about">About</NavLink>
    <Copyright id="footerItems" />
    <NavLink id="footerItems" to="/admin">Admin</NavLink>
    </div>
  </footer>
  )
}

export default Footer;
