import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import NavBar from '../components/Navbar';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Code'},
    { field: 'instrument', headerName: 'Instrument'},
    { field: 'price', headerName: 'Price', type: 'number'},
    { field: 'quantity', headerName: 'Quantity', type: 'number'},
    { field: 'date', headerName: 'Date', },
    { field: 'strike', headerName: 'Strike', type: 'number' },
    { field: 'maturity', headerName: 'Maturity', type: 'number' },
    { field: 'spot', headerName: 'Spot', type: 'number' },
    { field: 'volatility', headerName: 'Volatility',  type: 'number' },
    { field: 'interestRate', headerName: 'InterestRate', type: 'number' },
];

const rows = [
    { id: 1, instrument: "AAPL", price: 36.457856448, quantity: 1000, date: "20/06/2022", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 2, instrument: "ATVI", price: 36.457856448, quantity: 1000, date: "20/06/2010", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 3, instrument: "ADBE", price: 36.457856448, quantity: 1000, date: "20/06/2028", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 4, instrument: "CSCO", price: 36.457856448, quantity: 1000, date: "20/06/2005", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 5, instrument: "INTC", price: 36.457856448, quantity: 1000, date: "20/06/2006", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 6, instrument: "PYPL", price: 36.457856448, quantity: 1000, date: "20/06/2021", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 7, instrument: "TSLA", price: 36.457856448, quantity: 1000, date: "20/06/2020", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 8, instrument: "MSFT", price: 36.457856448, quantity: 1000, date: "20/06/2029", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
    { id: 9, instrument: "TSLA", price: 36.457856448, quantity: 1000, date: "20/06/2002", strike: 37.8, maturity: "20/06/2023", spot: 36.8, volatility: 0.21, interestRate: 0.3 },
];

export default function DataTable() {
    return (
        <div>
            <div style={{ marginBottom: '3rem' }}>
                <NavBar />
            </div>
            <div style={{ margin: 'auto', height:'50.5rem', width: '66.5rem' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
        
    );
}
