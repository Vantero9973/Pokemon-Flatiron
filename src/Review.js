import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const addresses = [
    "1 Main Street",
    "Johnson",
    "Texas",
    "69696",
    "USA"
];
const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: "Mr Ben Dover" },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "07/1776" }
];

function Review(props) {
    const { products } = props;
    console.log({ products });

    function subTotal() {
        let total = 0;
        for (let p of products) {
            console.log(p)
            total += p.price;
        }
        return total;
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {products?.map(product => (
                    <ListItem key={product.name}>
                        <img src={product.sprites} alt="" />
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">${product.price.toFixed(2)}</Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1">
                        ${subTotal().toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>Ben Dover</Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map(payment => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Review.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Review;