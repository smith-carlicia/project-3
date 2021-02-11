import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        User Page
          </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>{products.map(product => <ListItem>
                            <ListItemAvatar>
                                <Avatar alt='Product Image' src={product.imageURL}/>
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
        </div>
    );
}