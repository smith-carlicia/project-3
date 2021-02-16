import "./LoginAppBar.css";
import React from "react";
import { Box, Grid } from '@material-ui/core';
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import { Link } from "react-router-dom";

const LoginAppBar = () => {
  return (
    <Grid container>
      <Box component="header" className="nav-style">
        <div>
        Baby Driver
        
        <Link to="/" className="home-link">
          <HomeTwoToneIcon />
        </Link>
        </div>
      </Box>
    </Grid>
  );
}

export default LoginAppBar;
