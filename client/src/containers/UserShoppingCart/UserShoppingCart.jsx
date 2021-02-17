import React from 'react';
import './UserShoppingCart.css';
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import { Grid, AppBar, Toolbar, Paper, Button } from '@material-ui/core';

const UserShoppingCart = () => {

    return (
        <>
            <SearchAppBar />
            <Grid>
                <Grid>
                    <h2 className="shoppingCart">Shopping Cart</h2>
                    <AppBar position="static">
                        <Toolbar className="cartBar" variant="dense">
                            <h3 className="itemHeader">Item</h3>
                            <h3 className="quantityHeader">Quantity</h3>
                            <h3 className="priceHeader">Price</h3>
                            <h3 className="totalHeader">Total Price</h3>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid container direction="row" spacing={12}>
                    <Paper className="productImage" elevation={0} variant="outlined" square>Item</Paper>
                    <Paper className="productQuantity" elevation={0} variant="outlined" square>Qty</Paper>
                    <Paper className="productPrice" elevation={0} variant="outlined" square>Price</Paper>
                    <Paper className="totalPrice" elevation={0} variant="outlined" square>Total</Paper>
                </Grid>
                <Grid container justify="flex-end">
                    <Button className="checkoutBtn" variant="contained" color="secondary">
                        Checkout
                </Button>
                </Grid>
            </Grid>
            <SearchAppBar />
        </>
    )
}

export default UserShoppingCart;