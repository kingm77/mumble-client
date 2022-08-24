import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from './App';
import backendClient from './backend/apollo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
        <CookiesProvider>
            <HashRouter>
                <ApolloProvider client={backendClient} >
                    <App />
                </ApolloProvider>
            </HashRouter>
        </CookiesProvider>
  </React.StrictMode>
);

