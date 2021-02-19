import './Footer.css';
import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import { Link, NavLink } from "react-router-dom";

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
    <footer>
      <Container>
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
      </Container>
    </footer>
  )
}

export default Footer;
