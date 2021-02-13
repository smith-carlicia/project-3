import React from "react";
import "./Footer.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
function Copyright() {
  return (
    <Typography className="copyright" variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Baby Driver
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  return (
    <Grid container>
      <footer className="footer">
        <Grid
          container
          className="footerItems"
          direction="row"
          spacing={10}
          justify="center"
          alignItems="center"
        >
          <Grid item className="know" direction="column">
            <h5>Get to Know Us</h5>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </Grid>
          <Grid item className="contact" direction="column">
            <h5>Contact Us</h5>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </Grid>
          <Grid item className="business" direction="column">
            <h5>Do Business with Us</h5>
            <NavLink className="link" to="/admin">
              Admin
            </NavLink>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </Grid>
  );
};
export default Footer;
