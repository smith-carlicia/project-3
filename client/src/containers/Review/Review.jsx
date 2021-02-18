import React from 'react';
import './Review.css';
import Checkout from '../Checkout/Checkout';
import { Paper, Grid } from '@material-ui/core';

const Review = ({firstName, lastName, address, city, state, zipcode, nameOnCard, cardno, expirationDate, cvv, addy, cty, st, zip}) => {

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
                        <h6>{firstName}</h6>
                        <h6>{lastName}</h6>
                        <h6>{address}</h6>
                        <h6>{city}</h6>
                        <h6>{state}</h6>
                        <h6>{zipcode}</h6>
                    </Grid>
                    <Grid item>
                        <h5>Billing</h5>
                        <h6>{nameOnCard}</h6>
                        <h6>{cardno}</h6>
                        <h6>{expirationDate}</h6>
                        <h6>{cvv}</h6>
                        <h6>{addy}</h6>
                        <h6>{cty}</h6>
                        <h6>{st}</h6>
                        <h6>{zip}</h6>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Review;