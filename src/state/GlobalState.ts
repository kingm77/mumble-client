import React from "react";

export const PricerState = React.createContext({
    instr: [{}, (e: any) => { }] as const,
    strike: [{}, (e: any) => { }] as const,
    type: [{}, (e: any) => { }] as const,
    maturity: [{}, (e: any) => { }] as const,
    volatility: [{}, (e: any) => { }] as const,
    interestRate: [{}, (e: any) => { }] as const,
    spot: [{}, (e: any) => { }] as const,
    quantity: [{}, (e: any) => { }] as const
});

