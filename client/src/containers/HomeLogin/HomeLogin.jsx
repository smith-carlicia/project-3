import LoginAppBar from "../../components/LoginAppBar/LoginAppBar";
import { Avatar, Button, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { Link as Follow } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

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
    </>
  );
}
