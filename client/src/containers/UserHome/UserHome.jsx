import React, { useEffect, useState } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, InputBase, ListItemAvatar, ListItemSecondaryAction, Grid, ListItemText, Typography, IconButton, Container } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
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
        <>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
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
        </>
    );
}