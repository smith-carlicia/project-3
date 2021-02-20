import React, { useState } from "react";
import './SignUp.css';
import Footer from "../../components/Footer/Footer";
import userAPI from '../../utils/API_user';
import LoginAppBar from "../../components/LoginAppBar/LoginAppBar";
import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { useHistory, Link as Follow } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundImage: 'url(https://images.unsplash.com/photo-1561168112-e9bc0506c563?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJhYnklMjBzdHJvbGxlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60)',
    // backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: "25ch",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "15px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value
    setUser({ ...user, [name]: val })
  }
  return (
    <>
      <LoginAppBar />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ChildFriendlyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Getting Started
        </Typography>
          <form className={classes.form} noValidate onSubmit={async e => {
            e.preventDefault()
            setLoading(true);
            userAPI.createUser(user).then((response) => {
              history.push("/userhome");
            })
              .catch((err) => {
                console.log(err);
              });
            setLoading(false)
            console.log("added User...")
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={event => handleChange(event)}
                  className="textfield"
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={user.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={event => handleChange(event)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={user.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={event => handleChange(event)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={event => handleChange(event)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          </Button>
            <Grid item>
              <Follow to='/' variant="body2">
                {" Already have an account? Sign in"}
              </Follow>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
