import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemSecondaryAction, Grid, ListItemText, Typography, IconButton, Container } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import productAPI from '../../utils/API_product';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

export default function UserHome() {
    const [products, setProducts] = useState([]);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    useEffect(() => {
        productAPI.findAllProducts().then((response) => {
            setProducts(response.data);
            console.log(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={classes.root}>
            <Container fluid maxWidth="lg">
                <Grid container>
                    <Grid item xs={6} md={12} lg={12}>
                        <Typography variant="h6" className={classes.title} style={{ textAlign: "center" }}>
                            User Page
          </Typography>
                        <div className={classes.demo}>
                            <List dense={dense}>{products.map(product => <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt='Product Image' src={product.imageURL} />
                                </ListItemAvatar>
                                <ListItemText
                                    key={product._id}
                                    primary={product.title}
                                    secondary={product.description}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <Remove />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <Add />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>)}

                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}