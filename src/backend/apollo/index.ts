import { ApolloClient, from, gql, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const backendClient = new ApolloClient({
    link: from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(`[GraphQL error]: Message: ${message}, Location:
        ${locations}, Path: ${path}`));
                if (networkError) {
                    console.log(`[Network error]: ${networkError}`);
                }
            }
        }),
        new HttpLink({
            uri: process.env.REACT_APP_BACKEND_URL,
        }),
    ]),
    cache: new InMemoryCache(),
});

export default backendClient;