import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email : String!, $password: String!) {
        login(email : $email password: $password) {
            success
            messages
        }
    }
`;

export const CREATE_FINANCIAL_DEFINITION = gql`
    mutation createFinancialDefinition($strike: Float!, $maturity: String!, $type: String!, $instrumentName: String!){
        createFinancialDefinition(strike:$strike, maturity:$maturity, type:$type, instrumentName:$instrumentName){
            ... on EntityResult{success messages}
            ... on FinancialDefinition{id}
        }
  }
`;


