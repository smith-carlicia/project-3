import './Footer.css';
import React from "react";
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // color: rgb(7, 6, 6);
    font: "serif",
    fontSize: "12px",
  },
}));


const Footer = () => {
  const classes = useStyles();
  return (
    <footer >
      <Grid container spacing={8} className={classes.root}>
        <Grid item spacing={4}>
          <NavLink className="footerItems" to="/about">
            <Paper className={classes.paper}>About & Contact</Paper>
          </NavLink>
        </Grid>
        <Grid item spacing={4}><Paper className={classes.paper}><Copyright /></Paper>
          {/* <Copyright className="footerItems"/> */}
        </Grid>
        <Grid item spacing={4}>
          <NavLink className="footerItems" to="/admin">
            <Paper className={classes.paper}>Admin</Paper>
          </NavLink>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;
