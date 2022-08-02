import { gql } from "@apollo/client";


export const GET_INSTRUMENTS = gql`
        {
            getInstruments{
                 ...on EntityResult{ success messages }
                ...on InstrumentArray{ instruments { id name owner }}
            }
        }`;


export const GET_INSTRUMENT_BY_NAME = gql`
        query getInstrumentByName($name : String!) {
            getInstrumentByName(name:$name){
                 ... on EntityResult {success messages}
                 ... on Instrument {id name owner}
            }
         }`;