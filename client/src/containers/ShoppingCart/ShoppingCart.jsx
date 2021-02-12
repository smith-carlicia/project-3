import React from 'react';
import './ShoppingCart.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const ShoppingCart = () => {

    return(
        <Grid>
            <Grid>
                <h2 className="shoppingCart">Shopping Cart</h2>
                <AppBar  position="static">
                    <Toolbar className="cartBar" variant="dense">
                        <h3 className="itemHeader">Item</h3>
                        <h3 className="quantityHeader">Quantity</h3>
                        <h3 className="priceHeader">Price</h3>
                        <h3 className="totalHeader">Total Price</h3>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container direction="row" spacing={12}>
                <Paper  className="productImage" elevation={0} variant="outlined" square>Item</Paper>
                <Paper  className="productQuantity" elevation={0} variant="outlined" square>Qty</Paper>
                <Paper  className="productPrice" elevation={0} variant="outlined" square>Price</Paper>
                <Paper  className="totalPrice" elevation={0} variant="outlined" square>Total</Paper>
            </Grid>
            <Grid container justify="flex-end">
                <Button className="checkoutBtn" variant="contained" color="secondary">
                    Checkout
                </Button>
            </Grid>
        </Grid>
    )
}

export default ShoppingCart;