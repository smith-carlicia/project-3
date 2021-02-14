//   return (
//     <>
//       <SearchAppBar />
//       <div className={classes.root}>
//         <Container fluid maxWidth="lg">
//           <Grid container>
//             <Grid item xs={6} md={12} lg={12}>
//               <Typography variant="h6" className={classes.title} style={{ textAlign: "center" }}>
//                 User Page
//           </Typography>
//               <div className={classes.demo}>
//                 <List>{products.map(product => <ListItem>
//                   <ListItemAvatar>
//                     <Avatar alt='Product Image' src={product.imageURL} />
//                   </ListItemAvatar>
//                   <ListItemText
//                     key={product._id}
//                     primary={product.title}
//                     secondary={product.description}
//                   />
//                   <ListItemSecondaryAction>
//                     <div onClick={() => incrementAmountChange(product._id)}>
//                       <IconButton edge="start" aria-label="delete">
//                         <Remove />
//                       </IconButton>
//                       <IconButton edge="end" aria-label="add">
//                         <Add />
//                       </IconButton>
//                     </div>
//                   </ListItemSecondaryAction>
//                 </ListItem>)}
//                 </List>
//               </div>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Avatar, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import productAPI from '../../utils/API_product';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    table: {
      minWidth: 400,
    },
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function UserHome() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productAPI.findAllProducts().then((response) => {
      setProducts(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SearchAppBar />
      <TableContainer component={Paper} fluid style={{ marginTop: "100px", width: "100%" }}>
        <div className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>IMG</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell align="left">
                    <Avatar alt='Product Image' src={product.imageURL} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell align="left">{product.description}</TableCell>
                  <TableCell align="center">${product.price}</TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                  <TableCell align="right" >
                    <IconButton className="counter-buttons" edge="end" aria-label="subtract">
                      <Remove />
                    </IconButton></TableCell>
                  <TableCell align="right">
                    <IconButton className="counter-buttons" edge="end" aria-label="add">
                      <Add />
                    </IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}
