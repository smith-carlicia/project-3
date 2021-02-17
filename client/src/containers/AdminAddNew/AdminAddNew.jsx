import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { makeStyles } from '@material-ui/core/styles';
import productAPI from '../../utils/API_product';
import LoginAppBar from "../../components/LoginAppBar/LoginAppBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundImage: 'url(https://images.unsplash.com/photo-1561168112-e9bc0506c563?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJhYnklMjBzdHJvbGxlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60)',
    // backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: "15ch",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

function AdminAddNew() {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    imageURL: "",
    category: "",
    quantity: 0
  })
  const handleChange = e => {
    const { name, type, value } = e.target;
    console.log(type);
    const val = type === 'number' ? parseFloat(value) : value
    setProduct({ ...product, [name]: val })
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
          Add New Item
        </Typography>
        <form className={classes.form} noValidate onSubmit={async e => {
          e.preventDefault()
          setLoading(true);
          productAPI.createProduct(product).then((response) => {
            console.log(response.data);
            history.push("/admin");
          })
            .catch((err) => {
              console.log(err);
              alert("Please fill out missing input(s) to continue...");
            });
          setLoading(false)
          console.log("added Item...")
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={event => handleChange(event)}
                variant="outlined"
                required
                fullWidth
                id="title"
                label="title"
                name="title"
                autoComplete="title"
                value={product.title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={event => handleChange(event)}
                variant="outlined"
                required
                fullWidth
                id="description"
                label="description"
                name="description"
                autoComplete="description"
                value={product.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={event => handleChange(event)}
                variant="outlined"
                required
                fullWidth
                name="price"
                label="price"
                type="price"
                id="price"
                autoComplete="price"
                value={product.price}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={event => handleChange(event)}
                variant="outlined"
                required
                fullWidth
                name="imageURL"
                label="imageURL"
                type="pic"
                id="imageURL"
                autoComplete="imageURL"
                value={product.imageURL}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={event => handleChange(event)}
                variant="outlined"
                required
                fullWidth
                name="category"
                label="category"
                type="category"
                id="category"
                autoComplete="category"
                value={product.category}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={event => handleChange(event)}
                variant="outlined"
                required
                fullWidth
                name="quantity"
                label="quantity"
                type="quantity"
                id="quantity"
                autoComplete="quantity"
                value={product.quantity}
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
            Add Item
          </Button>
        </form>
      </div>
    </Container>
    </>
  );
}

export default AdminAddNew;
