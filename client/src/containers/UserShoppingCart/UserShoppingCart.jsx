import React, { useState } from "react";
import './UserShoppingCart.css';
import AuthFooter from "../../components/Footer/AuthFooter";
import { Avatar, Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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

function UserShoppingCart(props) {
    const classes = useStyles();
    const [products, setProducts] = useState(props.location.state);

    const handleDelete = (id) => {
        for (let i = 0; i < products.length; i++) {
            if (products[i]._id === id) {
                let arr = products;
                arr = arr.slice(1);
                console.log("deleted from cart");
                setProducts(arr);
            }
        }
    }

    return (
        <>
            <SearchAppBar />
            <TableContainer component={Paper} fluid="true" style={{ marginTop: "100px", width: "100%" }}>
                <Button className="checkoutBtn" variant="contained" color="secondary">
                    <NavLink to="/userhome">
                        Back
                     </NavLink>
                </Button>
                <div className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>IMG</TableCell>
                                <TableCell align="left">Product</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="right">In Stock</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product._id}>
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
                                        <IconButton className={classes.palette} color="secondary" edge="end" aria-label="delete" onClick={() => handleDelete(product._id)}>
                                            <DeleteForeverIcon />
                                        </IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button className="checkoutBtn" variant="contained" color="primary">
                        <NavLink to="/checkout">
                            Checkout
                     </NavLink>
                    </Button>
                </div>
            </TableContainer>
            <AuthFooter />
        </>
    )
}

export default UserShoppingCart;