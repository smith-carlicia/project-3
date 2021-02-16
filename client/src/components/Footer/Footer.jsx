import './Footer.css';
import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { Link, NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link href="https://github.com/badeshiyan/project-3">
        Baby Driver
      </Link>{' '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}


const Footer = () => {
  return (
      <footer>
        <Grid container direction="row" spacing={10} justify="center" >
          <Grid item direction="column">
            <NavLink className="footerItems" to="/about">
              About & Contact
                            </NavLink>
          </Grid>
          <Grid item className="footerItems" direction="column">
            <Copyright />
          </Grid>
          <Grid item direction="column">
            <NavLink className="footerItems" to="/admin">
              Admin
                            </NavLink>
          </Grid>
        </Grid>
      </footer>
  )
}

export default Footer;
