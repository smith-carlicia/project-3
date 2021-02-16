import React, { useEffect, useState } from "react";
import { Avatar, Fab, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import productAPI from '../../utils/API_product';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: "#3f50b5",
    secondary: "#e53935",
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    table: {
      minWidth: 400,
    },
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function UserHome() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productAPI.findAllProducts().then((response) => {
      setProducts(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SearchAppBar />
      <TableContainer component={Paper} fluid style={{ marginTop: "100px", width: "100%" }}>
        <div className={classes.root}>
          <Link to="/addnewitem">
            <Fab variant="extended" color={classes.palette} color="secondary" aria-label="add">
              <AddIcon />Shopping Cart
                        </Fab>
          </Link>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>IMG</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell align="left">
                    <Avatar alt='Product Image' src={product.imageURL} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell align="left">{product.description}</TableCell>
                  <TableCell align="center">${product.price}</TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                  <TableCell align="right" width="15px">
                    <IconButton className="counter-buttons" edge="end" aria-label="subtract">
                      <Remove />
                    </IconButton></TableCell>
                  <TableCell align="right" width="15px">
                    <IconButton className="counter-buttons" edge="end" aria-label="add">
                      <Add />
                    </IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}
