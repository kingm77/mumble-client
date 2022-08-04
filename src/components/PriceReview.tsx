import React, { useContext, useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { PricerState } from '../state/GlobalState';
import PriceDataItem from './PriceDataItem';
import TradeDetail from './TradeDetail';
import {  GET_TRADE_PRICE } from '../backend/apollo/query';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_FINANCIAL_DEFINITION, CREATE_MARKET_DATA } from '../backend/apollo/mutation';



export default function PriceReview() {

    const {
        instr: [instrument, ],
        type: [type, ],
        maturity: [maturity, setMaturity],
        strike: [strike, ],
        spot: [spot, ],
        volatility: [volatility, ],
        interestRate: [interestRate,],
        quantity: [quantity,],
        price: [priceValue, setPriceValue],
        instrOwner: [instrumentOwner,],
        financialDefinitionId: [finDefId, setFinDefId],
        marketDataId: [mktDataId, setMktDataId]
    } = useContext(PricerState);

    const [isEvent, setIsEvent] = useState(false);
    const [eventMessage, setEventMessage] = useState("");

    let strMaturity = "";
    try {
        strMaturity = new Date(maturity.toString()).toISOString().substring(0, 10);
    }
    catch (ex: any) {
        strMaturity = new Date().toISOString().substring(0, 10);
        setMaturity(new Date());
    }

    const [createFinancialDefinition] = useMutation(CREATE_FINANCIAL_DEFINITION);
    const [createMarketData] = useMutation(CREATE_MARKET_DATA);
     
    const priceRes = useQuery(GET_TRADE_PRICE, { variables: {finDefId, marketDataId: mktDataId, quantity: Number(quantity) } });

    function getPrice() {
        if (priceRes.error) {
            setIsEvent(true);
            setEventMessage("an error occured in pricing");
        }
        if (priceRes.data) {
            console.log("success ", priceRes.data.getTradePrice.success);
            if (!priceRes.data.getTradePrice.success) {
                setIsEvent(true);
                setEventMessage(priceRes.data.getTradePrice.messages[0]);
            }
            else {
                setPriceValue(Number(priceRes.data.getTradePrice.messages[0]))
            }
        }
    }


    useEffect(() => {
        const createFinancialDef = async () => {
            const res = await createFinancialDefinition({ variables: { strike: Number(strike), maturity: strMaturity, type, instrumentName: instrument } })
            if (res.data.createFinancialDefinition.success) {
                setIsEvent(true);
                setEventMessage(res.data.createFinancialDefinition.messages[0]);
            }
            else {
                setFinDefId(Number(res.data.createFinancialDefinition.id));
            }
        }

        const createMketData = async () => {
            const res = await createMarketData({ variables: { volatility: Number(volatility), spot: Number(spot), interestRate: Number(interestRate) } })
            if (res.data.createMarketData.success) {
                setIsEvent(true);
                setEventMessage(res.data.createMarketData.messages[0]);
            }
            else {
                setMktDataId(Number(res.data.createMarketData.id));
            }
        }
        createFinancialDef();
        createMketData();
    }, []);

    useEffect(() => {
        if(finDefId && mktDataId)
            getPrice();

        console.log("priceValue ", priceValue)
    }, [getPrice]);

    if (isEvent)
        return (<p>{eventMessage}</p>)

    return (
        <React.Fragment>
            { }<Typography variant="h6" gutterBottom>
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
                    <Typography gutterBottom>{ instrument.toString() }</Typography>
                    <Typography gutterBottom>{ instrumentOwner.toString() }</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Trade details
                    </Typography>
                    <Grid container>
                        <TradeDetail name="Trade type" value={type.toString()} />
                        <TradeDetail name="Trade quantity" value={quantity.toString()} />
                        <TradeDetail name="Trade date" value={new Date().toISOString().substring(0, 10) } />
                        <TradeDetail name="Price" value={priceValue} />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}