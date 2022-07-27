import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



export default function FinancialDefForm() {
    const [selectedDate, handleDateChange] = useState(new Date());
    console.log(new Date().toISOString().substr(0, 10))
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Financial definition
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-standard-label">Instrument</InputLabel>
                        <Select

                            labelId="demo-simple-select-standard-label"
                            id="instruments"
                            label="Instrument"
                        >
                            <MenuItem value={10}>AAPL</MenuItem>
                            <MenuItem value={20}>MSFT</MenuItem>
                            <MenuItem value={30}>TSLA</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl sx={{ m: 2, minWidth: 12 }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Type"
                        >
                            <FormControlLabel value="call" control={<Radio />} label="Call" />
                            <FormControlLabel value="put" control={<Radio />} label="Put" />

                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="strike"
                        name="strike"
                        label="Strike"
                        fullWidth
                        autoComplete="Strike*"
                        variant="standard"
                    />
                </Grid>
          
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="date"
                        label="Maturity"
                        fullWidth
                        variant="standard"
                        defaultValue={new Date().toISOString().substr(0, 10)}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}