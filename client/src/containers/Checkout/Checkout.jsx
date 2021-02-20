import React, { useState, useEffect } from 'react';
// import {  StepLabel, Stepper  } from '@material-ui/core/styles';
import { Button, Paper, Step, Stepper, StepLabel } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import Review from '../Review/Review';


const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardno, setCardNo] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [addy, setAddy] = useState("");
  const [cty, setCty] = useState("");
  const [st, setSt] = useState("");
  const [zip, setZip] = useState("");

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm
          firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          address={address} setAddress={setAddress}
          city={city} setCity={setCity}
          state={state} setState={setState}
          zipcode={zipcode} setZipcode={setZipcode}
        />;
      case 1:
        return <PaymentForm
          nameOnCard={nameOnCard} setNameOnCard={setNameOnCard}
          cardno={cardno} setCardNo={setCardNo}
          expirationDate={expirationDate} setExpirationDate={setExpirationDate}
          cvv={cvv} setCvv={setCvv}
          addy={addy} setAddy={setAddy}
          cty={cty} setCty={setCty}
          st={st} setSt={setSt}
          zip={zip} setZip={setZip}
        />;
      case 2:
        return <Review
          firstName={firstName} lastName={lastName}
          address={address} city={city}
          state={state} zipcode={zipcode}
          nameOnCard={nameOnCard} cardno={cardno}
          expirationDate={expirationDate} cvv={cvv}
          addy={addy} cty={cty}
          st={st} zip={zip}
        />;
      default:
        throw new Error('Unknown step');
    }
  }

    // useEffect(()=> {
  //       console.log( `First Name Changed ${firstName}`);
  //       console.log( `Last Name Changed ${lastName}`);
  //       console.log( `Street Address Changed ${address}`);
  //       console.log( `City Name Changed ${city}`);
  //       console.log( `State Name Changed ${state}`);
  //       console.log( `Zipcode Changed ${zipcode}`);
  //       console.log( `Name Changed ${nameOnCard}`);
  //       console.log( `Card No Changed ${cardno}`);
  //       console.log( `Expiration Date Changed ${expirationDate}`);
  //       console.log( `CVV Changed ${cvv}`);
  //       console.log( `Street Address Changed ${addy}`);
  //       console.log( `City Name Changed ${cty}`);
  //       console.log( `State Name Changed ${st}`);
  //       console.log( `Zipcode Changed ${zip}`);
  // },[])

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Paper>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}