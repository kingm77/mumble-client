import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import backendClient from './backend/apollo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
        <CookiesProvider>
            <BrowserRouter>
                <ApolloProvider client={backendClient} >
                    <App />
                </ApolloProvider>
            </BrowserRouter>
        </CookiesProvider>
  </React.StrictMode>
);

