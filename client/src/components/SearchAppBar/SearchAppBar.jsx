import "./SearchAppBar.css";
import React from "react";
import {
  AppBar,
  fade,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    borderBottom: "solid",
    flexGrow: 1,
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    pointerEvents: "none",
    position: "absolute",
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
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
            <NavLink to="/usershoppingcart" className="nav-style">
              <ShoppingCartTwoToneIcon />
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
