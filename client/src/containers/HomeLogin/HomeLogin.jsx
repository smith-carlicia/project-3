import LoginAppBar from "../../components/LoginAppBar/LoginAppBar";
import Footer from "../../components/Footer/Footer";
import { Avatar, Button, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { Link as Follow } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function HomeLogin() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()

  //   setEmail(evt.target.value)
  //   setPassword(evt.target.value)
  // }

  const handleEmail = (evt) => {
    evt.preventDefault()
    setEmail(evt.target.value)

  }

  const handlePassword = (evt) => {
    evt.preventDefault()
    setPassword(evt.target.value)

  }
  return (
    <>
      <LoginAppBar />
      <Container component="main" maxWidth="md">
        <Paper>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <ChildFriendlyIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                name='email'
                value={email}
                onChange={handleEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                name='password'
                value={password}
                onChange={handlePassword}
              />
              <Follow to='/userhome'><Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
          </Button>
              </Follow>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <Follow to='/signup' variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Follow>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
