import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const data = [
    {
        name: 'Strike',
        desc: '',
        price: '9.99',
    },
    {
        name: 'Spot',
        desc: '',
        price: '3.45',
    },
    {
        name: 'Maturity',
        desc: '',
        price: '30/08/2024',
    },
    {
        name: 'Volatility',
        desc: '',
        price: '0.33',
    },
    { name: 'Interest rate', desc: '', price: '0.50' },
];

const tradeDetails = [
    { name: 'Trade type', detail: 'Call' },
    { name: 'Trade quantity', detail: '100' },
    { name: 'Trade date', detail: new Date().toLocaleDateString() },
    { name: 'Price', detail: '36.087564' },
];

export default function PriceReview() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
               Summary
            </Typography>
            <List disablePadding>
                {data.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Instrument
                    </Typography>
                    <Typography gutterBottom>AAPL</Typography>
                    <Typography gutterBottom>APPLE INC.</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Trade details
                    </Typography>
                    <Grid container>
                        {tradeDetails.map((payment) => (
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