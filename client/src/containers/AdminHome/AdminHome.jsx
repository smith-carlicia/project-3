import React, { useEffect, useState } from "react";
import LoginAppBar from "../../components/LoginAppBar/LoginAppBar";
import { Avatar, IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
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

export default function AdminHome() {
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
            <LoginAppBar />
            <TableContainer component={Paper} fluid style={{ marginTop: "100px", width: "100%" }}>
                <div className={classes.root}>
                    <Link to="/addnewitem">
                        <Fab variant="extended" className={classes.palette} color="primary" aria-label="add">
                            <AddIcon />Add Item
                        </Fab>
                    </Link>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>IMG</TableCell>
                                <TableCell align="left" >Local Products</TableCell>
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
                                        <IconButton className={classes.palette} color="primary" edge="end" aria-label="edit">
                                            <EditIcon />
                                        </IconButton></TableCell>
                                    <TableCell align="right" width="15px">
                                        <IconButton className={classes.palette} color="secondary" edge="end" aria-label="delete">
                                            <DeleteForeverIcon />
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
