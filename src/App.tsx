import { gql } from '@apollo/client';
import {Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { history } from './helpers/history';
import Home from './views/Home';
import Login from './views/Login'
import MyTrades from './views/MyTrades';
import Pricer from './views/Pricer';
import Register from './views/Register';

export default function App() {
    history.navigate = useNavigate();
    history.location = useLocation();

    
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<Login />} />
                    <Route path="/signUp" element={<Register />} />
                    <Route
                        path="/pricer"
                        element={
                               <Pricer />     
                            }
                    />
                    <Route path="/myTrades" element={<MyTrades />} />
                </Routes>
        </div>
    );
}

