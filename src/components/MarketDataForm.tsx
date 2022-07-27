import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function MarketDataForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Market Data
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="volatility"
                        name="volatility"
                        label="Volatility"
                        fullWidth
                        autoComplete="Volatility*"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="spot"
                        name="spot"
                        label="Spot"
                        fullWidth
                        autoComplete="Spot*"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="interestrate"
                        name="interestrate"
                        label="Interest Rate"
                        fullWidth
                        autoComplete="Interest Rate*"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}