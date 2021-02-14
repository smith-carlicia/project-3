import "./LoginAppBar.css";
import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function LoginAppBar() {
  const classes = useStyles();

  return (
    <div className="nav-stlye">
      <AppBar position="fixed" >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className="nav-style">
              Baby Driver
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
