import "./SearchAppBar.css";
import React from "react";
import {
  AppBar,
  fade,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    borderBottom: "solid",
    flexGrow: 1,
  },
  title: {
    display: "none",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className="nav-style">
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/about" className="nav-style">
              Baby Driver
            </Link>

          </Typography>
          <div
            id="nav-mobile"
            className="right"
            style={{ direction: "inherit" }}
          >
            <NavLink to="/" className="nav-style">
              <MeetingRoomTwoToneIcon />
            </NavLink>
            <NavLink to="/userhome" className="nav-style">
              <HomeTwoToneIcon />
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
