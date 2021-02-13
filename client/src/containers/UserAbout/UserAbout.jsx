import React from "react";
import { Link as Follow } from "react-router-dom";
import "./UserAbout.css";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import { makeStyles } from "@material-ui/core/styles";

const UserAbout = () => {
  return (
    <body>
      <div class="container">
        Baby Driver is a unique app that gives its users (typically mothers with
        young children), the ability to order baby-specific supplies, having
        their favorite/past order items ready to purchase. 
        
        Created in February 2021by recent Georgia Tech Full Stack Development Bootcamp graduates Bambo
        Adeshiyan, Dempsey Finley-Price an Carlicia Smith, the app app also
        eliminates the need to go out into the public, possibly exposing a
        mother and her newborn to the COVID-19 virus. 
      </div>
    </body>
  );
};

export default UserAbout;
