import React, { useState, useEffect } from 'react';
import './AddressForm.css';
import { Grid, TextField } from '@material-ui/core';

const Address = ({firstName, setFirstName, lastName, setLastName, address, setAddress, city, setCity, state, setState, zipcode, setZipcode}) => {


    // const handleFirstNameChange =(event)=>{
        
    //     setFirstName(event.target.value)

    //     console.log('FIRST NAME VALUE--->', firstName)

    //     // const {
    //     //     firstName,
    //     //     lastName,
    //     //     address,
    //     //     city,
    //     //     state,
    //     //     zipcode
    //     // }  = (event.target.value);
    //     // setFirstName(firstName);
    //     // setLastName(lastName);
    //     // setAddress(address);
    //     // setCity(city);
    //     // setState(state);
    //     // setZipcode(zipcode);
    // }


    // create handleSubmit

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const area = { firstName, lastName, address, city, state, zipcode};
        console.log(area);
        //whats the goal of submitting the form?
            //high version of state
            // context***
            // localstorage.get.item
    }

    return(
        <Grid container>
            <Grid item  
                direction="row" >
                <h3 className="shippingHeader">
                    Shipping Address</h3>
            </Grid>
            <Grid container
                className="firstname"
                direction="row" 
                justify="center"
                alignItems="flex-start" >
                <TextField
                    justify="space-between"
                    className="first"
                    label="First Name"
                    id="outlined-margin-dense"
                    margin="First Name"
                    variant="outlined"
                    name='firstName'
                    value={firstName}
                    onChange={evt => setFirstName(evt.target.value)}
                />
                <TextField
                    className="last"
                    label="Last Name"
                    id="outlined-margin-dense"
                    margin="Last Name"
                    variant="outlined"
                    name='lastName'
                    value={lastName}
                    onChange={evt => setLastName(evt.target.value)}
                />
            </Grid>
            <Grid container
                className="addresses"
                direction="row" 
                justify="space-around"
                alignItems="flex-start">
                <TextField
                    className="street"
                    label="Street Address"
                    id="outlined-margin-dense"
                    margin="Street Address"
                    variant="outlined"
                    name='address'
                    value={address}
                    onChange={evt => setAddress(evt.target.value)}
                    // value={address}
                    // onChange={onChange}
                />
            </Grid>
            <Grid container
                className="location"
                direction="row" 
                justify="center"
                alignItems="flex-start">
                <TextField
                    label="City"           
                    id="outlined-margin-dense"
                    margin="City"
                    variant="outlined"
                    name='city'
                    value={city}
                    onChange={evt => setCity(evt.target.value)}
                />
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

export default Address;