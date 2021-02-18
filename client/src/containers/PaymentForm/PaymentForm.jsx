import React, { useState, useEffect } from 'react';
import './PaymentForm.css';
import { Grid, TextField } from '@material-ui/core';


const Payment = ({ nameOnCard, setNameOnCard, cardno, setCardNo, expirationDate, setExpirationDate, cvv, setCvv, addy, setAddy, cty, setCty, st, setSt, zip, setZip}) => {


    const handleSubmit = (evt) => {
        evt.preventDefault()

        // const pay = { name, cardno, expirationDate, cvv, address, city, state, zipcode};
        // console.log(pay);
        //whats the goal of submitting the form?
            //high version of state
            // context***
            // localstorage.get.item
    }

    // useEffect(()=> {
        // console.log( `Name Changed ${name}`);
        // console.log( `Card No Changed ${cardno}`);
        // console.log( `Expiration Date Changed ${expirationDate}`);
        // console.log( `CVV Changed ${cvv}`);
        // console.log( `Street Address Changed ${addy}`);
        // console.log( `City Name Changed ${cty}`);
        // console.log( `State Name Changed ${st}`);
        // console.log( `Zipcode Changed ${zip}`);
    // })


    return(
        <Grid container>
            <Grid item
                direction="row"
                justify="center"
                alignItems="flex-start" >
                <h3
                className="paymentHeader"
                >
                    Payment Info
                </h3>
            </Grid>
            <Grid container
                 className="name"
                 direction="row" 
                 justify="center"
                 alignItems="flex-start">
                <TextField
                    className="nameInput"
                    label="Name on Card"
                    id="outlined-margin-dense"
                    margin="Name on Card"
                    variant="outlined"
                    name='nameOnCard'
                    value={nameOnCard}
                    onChange={evt => setNameOnCard(evt.target.value)}
                />
                <TextField
                    label="Card No."
                    id="outlined-margin-dense"
                    margin="Card No"
                    variant="outlined"
                    name='cardno'
                    value={cardno}
                    onChange={evt => setCardNo(evt.target.value)}
                />
            </Grid>
            <Grid container
                className="info"
                direction="row" 
                justify="center"
                alignItems="flex-start">
                <TextField
                    sm={3}
                    className="expirationDate"
                    label="Expiration Date"
                    id="outlined-margin-dense"
                    margin="Expiration Date"
                    variant="outlined"
                    name='expirationDate'
                    value={expirationDate}
                    onChange={evt => setExpirationDate(evt.target.value)}
                />
                <TextField
                    label="CVV"
                    id="outlined-margin-dense"
                    margin="CVV"
                    variant="outlined"
                    name='cvv'
                    value={cvv}
                    onChange={evt => setCvv(evt.target.value)}
                />
            </Grid>
                <h3 
                    className="billingHeader">
                    Billing Info
                </h3>
            <Grid container
                className="location"
                direction="row" 
                justify="center"
                alignItems="flex-start">
                <TextField
                    label="Street Address"
                    id="outlined-margin-dense"
                    margin="Street Address"
                    variant="outlined"
                    name='addy'
                    value={addy}
                    onChange={evt => setAddy(evt.target.value)}
                />
                <TextField
                    label="City"           
                    id="outlined-margin-dense"
                    margin="City"
                    variant="outlined"
                    name='cty'
                    value={cty}
                    onChange={evt => setCty(evt.target.value)}
                />
            </Grid>
            <Grid container
                className="stateZip"
                direction="row" 
                justify="center"
                alignItems="flex-start">
                  <TextField
                    label="State"
                    id="outlined-margin-dense"
                    margin="State"
                    variant="outlined"
                    name='st'
                    value={st}
                    onChange={evt => setSt(evt.target.value)}
                />
                <TextField
                    className="textInput"
                    label="Zip Code"
                    id="outlined-margin-dense"
                    margin="Zip Code"
                    variant="outlined"
                    name='zip'
                    value={zip}
                    onChange={evt => setZip(evt.target.value)}
                />
                </Grid>
            </Grid>
    )
}

export default Payment;