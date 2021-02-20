import "./SearchAppBar.css";
import React from "react";
import { Box, Grid } from '@material-ui/core';
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import { Link } from "react-router-dom";

export default function SearchAppBar() {
  return (
    <Grid container>
      <Box component="header" className="nav-style">
        Baby Driver
        <Link to="/aboutauth">
        </Link>
        <Link to="/userhome" className="home-link">
          <HomeTwoToneIcon />
        </Link>
        <Link to="/" className="home-link">
          <MeetingRoomTwoToneIcon />
        </Link>
      </Box>
    </Grid>
  );
} 
