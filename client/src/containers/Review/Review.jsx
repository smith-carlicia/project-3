import React from 'react';
import './Review.css';
import { Paper, Grid } from '@material-ui/core';

const Review = () => {

    return(
        <Grid container>
            <Grid item>
                <Paper  className="paper" elevation={0} />
            </Grid>
        </Grid>
    )
}

export default Review;