import React from 'react';
import './Review.css';
import Address from '../AddressForm/AddressForm';
import Payment from '../PaymentForm/PaymentForm';
import { Paper, Grid } from '@material-ui/core';

const Review = () => {

    // const addressInfo = Address;
    // const paymentInfo = Payment;
    // const listItems = 

    return(
        <Grid container>
            <Grid item>
                <Paper  className="paper" elevation={0}>
                    <Grid item>
                        <h5>Products</h5>
                    </Grid>
                    <Grid item>
                        <h5>Shipping</h5>
                    </Grid>
                    <Grid item>
                        <h5>Billing</h5>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Review;