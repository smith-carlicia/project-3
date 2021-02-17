import React, { useState, useEffect } from 'react';
import './PaymentForm.css';
import { Grid, TextField } from '@material-ui/core';


const Payment = () => {

    const[name, setName] = useState("");
    const[cardno, setCardNo] = useState("");
    const[expirationDate, setExpirationDate] = useState("");
    const[cvv, setCvv] = useState("");
    const[address, setAddress] = useState("");
    const[city, setCity] = useState("");
    const[state, setState] = useState("");
    const[zipcode, setZipcode] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault()
        //whats the goal of submitting the form?
            //high version of state
            // context***
            // localstorage.get.item
    }

    useEffect(()=> {
        console.log( `Name Changed ${name}`);
        console.log( `Card No Changed ${cardno}`);
        console.log( `Expiration Date Changed ${expirationDate}`);
        console.log( `CVV Changed ${cvv}`);
        console.log( `Street Address Changed ${address}`);
        console.log( `City Name Changed ${city}`);
        console.log( `State Name Changed ${state}`);
        console.log( `Zipcode Changed ${zipcode}`);
    })


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
                    name='name'
                    value={setName}
                    onChange={evt => setName(evt.target.value)}
                />
                <TextField
                    label="Card No."
                    id="outlined-margin-dense"
                    margin="Card No"
                    variant="outlined"
                    name='cardno'
                    value={setCardNo}
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
                    value={setExpirationDate}
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
                    name='address'
                    value={address}
                    onChange={evt => setAddress(evt.target.value)}
                />
                <TextField
                    label="City"           
                    id="outlined-margin-dense"
                    margin="City"
                    variant="outlined"
                    name='city'
                    value={city}
                    onChange={evt => setCity(evt.target.value)}
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
                    name='state'
                    value={state}
                    onChange={evt => setState(evt.target.value)}
                />
                <TextField
                    className="textInput"
                    label="Zip Code"
                    id="outlined-margin-dense"
                    margin="Zip Code"
                    variant="outlined"
                    name='zipcode'
                    value={zipcode}
                    onChange={evt => setZipcode(evt.target.value)}
                />
                </Grid>
            </Grid>
    )
}

export default Payment;