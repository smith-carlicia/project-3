import React from "react";
import './AddNewItem.css';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const AddNewItem = () => {

  return (
   <Grid container direction="column" spacing={6}>
     <h2 className="productManagerHeader">Admin Product Manager</h2>
    <Grid item xs={6}>
      <TextField
        className="newItemName"
        id="outlined-multiline-static"
        label="Product Name"
        rows={6}
        defaultValue="Default Value"
        variant="outlined"
      />
    </Grid>
      <Grid item xs={6}>
        <TextField
          className="newItemDescription"
          id="outlined-multiline-static"
          label="Product Description"
          rows={6}
          defaultValue="Default Value"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
      <TextField
          className="newItemPrice"
          id="outlined-multiline-static"
          label="Product Price"
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </Grid>
        <Grid item xs={6}>
          <TextField
            className="newItemBrand"
            id="outlined-multiline-static"
            label="Product Brand"
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
          />
        </Grid>
        {/* refactor onclick event to render newly added items in item manager div */}
        <Button onClick={() => { alert('clicked') }} className="newItemSubmit" justify="center" variant="outlined" color="primary">
          Submit
        </Button>
          {/* Submitted new products rendered here */}
    <Grid item spacing={6} xs={5}></Grid>
    <Grid item xs={7} direction="row" >
      <Paper className="renderedNewItems">
        Newly Submitted Products Rendered Here
      </Paper>
    </Grid>
   </Grid>
  )
};

export default AddNewItem;
