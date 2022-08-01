import React, { useContext } from 'react';
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { PricerState } from '../state/GlobalState';
import { onNumericalDataChange } from '../views/Pricer';


export default function FinancialDefForm() {
    const {
        instr: [instrument, setInstrument],
        type: [type, setType],
        maturity: [maturity, setMaturity],
        strike: [strike, setStrike],
        quantity: [quantity, setQuantity]
    } = useContext(PricerState);

    const instruments = ["AAPL", "MSFT", "TSLA"];

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
                            defaultValue=""
                            value={instrument}
                            onChange={e => {setInstrument(e.target.value.toString())}}
                        >
                            {instruments.map((instr) => (
                                <MenuItem value={instr}>{instr}</MenuItem>
                             ))} 
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl sx={{ m: 2, minWidth: 12 }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Type"
                            value={type}
                            onChange={e => {setType(e.target.value.toString())}}
                        >
                            <FormControlLabel  value="call" control={<Radio />} label="Call" />
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
                        value={strike}
                        onChange={e => { onNumericalDataChange(e.target.value, setStrike) }}
                        fullWidth
                        autoComplete="Strike*"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    type="number"
                    id="strike"
                    name="strike"
                    label="Quantity"
                    value={quantity}
                    onChange={e => {onNumericalDataChange(e.target.value, setQuantity) }}
                    fullWidth
                    autoComplete="Quantity*"
                    variant="standard"
                />
            </Grid>
          
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Maturity"
                            value={maturity}
                            onChange={(newValue) => {
                                setMaturity(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}