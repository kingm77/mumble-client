import React, { useContext} from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { PricerState } from '../state/GlobalState';
import PriceDataItem from './PriceDataItem';
import TradeDetail from './TradeDetail';
import { useMutation, useQuery } from '@apollo/client';
import { GET_INSTRUMENT_BY_NAME } from '../backend/apollo/query';
import { CREATE_FINANCIAL_DEFINITION } from '../backend/apollo/mutation';


export default function PriceReview() {

    const {
        instr: [instrument, ],
        type: [type, ],
        maturity: [maturity, setMaturity],
        strike: [strike, ],
        spot: [spot, ],
        volatility: [volatility, ],
        interestRate: [interestRate,],
        quantity: [quantity, ]
    } = useContext(PricerState);

    let strMaturity = "";
    try {
        strMaturity = new Date(maturity.toString()).toISOString().substr(0, 10);
    }
    catch (ex: any) {
        strMaturity = new Date().toISOString().substr(0, 10);
        setMaturity(new Date());
    }
  
    const [createFinancialDef] = useMutation(CREATE_FINANCIAL_DEFINITION);
    const { loading, error, data } = useQuery(GET_INSTRUMENT_BY_NAME, { variables: { name: instrument }});

    if (loading) return <p>Loading...</p>;
    const res = data.getInstrumentByName;

    if (res.sucess)
        return <p>{res.messages[0]}</p>

    const instrumentObj = res;

    (async () => {
        const finDef = await createFinancialDef({ variables: { strike: strike, maturity: strMaturity, type: type, instrumentName: instrumentObj.name } })
        console.log(finDef);
    })();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
               Summary
            </Typography>

            <List disablePadding>
                <PriceDataItem text="strike" value={strike.toString()} />
                <PriceDataItem text="spot" value={spot.toString()} />
                <PriceDataItem text="maturity" value={strMaturity } />
                <PriceDataItem text="volatility" value={volatility.toString()} />
                <PriceDataItem text="interestRate" value={interestRate.toString()} />
            </List>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Instrument
                    </Typography>
                    <Typography gutterBottom>{ instrumentObj.name }</Typography>
                    <Typography gutterBottom>{ instrumentObj.owner }</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Trade details
                    </Typography>
                    <Grid container>
                        <TradeDetail name="Trade type" value={type.toString()} />
                        <TradeDetail name="Trade quantity" value={quantity.toString()} />
                        <TradeDetail name="Trade date" value={new Date().toISOString().substr(0, 10) } />
                        <TradeDetail name="Price" value={"78546"} />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}