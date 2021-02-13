
import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <Grid container>
            <footer className="footer">
                <Grid container className="footerItems" direction="row" spacing={2} justify="center" >
                    <Grid item  className="know" direction="column">
                            <NavLink className="link" to="/about">
                                About & Contact
                            </NavLink>
                    </Grid>
                    <Grid item className="business" direction="column">
                            <NavLink className="link" to="/admin">
                                Admin
                            </NavLink>
                    </Grid>
                </Grid>
            </footer>
        </Grid>
    )
}
export default Footer;
